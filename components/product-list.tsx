"use client";
import Stripe from "stripe";
import ProductCard from "./product-card";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}
const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search products...."
          className="w-full max-w-md rounded-2xl border  border-gray-300 px-4 py-2 outline-none focus:ring-0 focus:outline focus:ring-offset-0 "
        />
      </div>

      <ul className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-4 mt-2">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
