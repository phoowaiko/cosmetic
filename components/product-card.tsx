import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}
const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  // ("Product Card:", product);

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group h-full py-0 transition duration-300 hover:shadow-2xl   flex flex-col border border-gray-200 bg-[#FAFAFA]">
        {product.images?.[0] && (
          <div className="relative h-60 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-t-lg  transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        )}

        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className=" flex-grow  flex flex-col justify-between ">
          {product.description && (
            <p className="text-gray-600 text-md mb-2 ">{product.description}</p>
          )}
          {price?.unit_amount && (
            <p className="text-lg font-semibold text-gray-900 text-end">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="w-full mt-4 bg-black text-white mb-4">
            View Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
