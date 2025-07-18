"use client";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";

interface Props {
  product: Stripe.Product;
}
export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg  overflow-hidden mt-10">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        {product.images?.[0] && (
          <div className="relative w-full md:w-1/2 h-64 md:h-96">
            <Image
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              priority
              className="md:rounded-l-lg transition-opacity duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-between p-6 w-full md:w-1/2 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            {product.description && (
              <p className="text-gray-600 mt-2 text-base leading-relaxed">
                {product.description}
              </p>
            )}
            {price?.unit_amount && (
              <p className="text-xl font-semibold text-gray-900 mt-4">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-medium text-base">Quantity:</span>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <Button
                  variant="outline"
                  onClick={() => removeItem(product.id)}>
                  -
                </Button>
                <span className="px-4 text-base">{quantity}</span>
                <Button variant="outline" onClick={onAddItem}>
                  +
                </Button>
              </div>
            </div>

            <Link href="/checkout">
              {" "}
              <Button className="w-full">Add to Cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
