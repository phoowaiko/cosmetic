import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel"; // Ensure this import matches the correct export from your carousel component

export default async function Home() {
  const products = await stripe.products.list({
    limit: 4,
    expand: ["data.default_price"],
  });
  return (
    <div className="w-ful mx-auto  ">
      <section className="py-3 px-4 md:px-12">
        <div className="space-y-3">
          <h2 className="text-5xl font-bold text-gray-800 ">
            Welcome to My Ecommerce
          </h2>
          <p className="text-xl text-gray-600 md:text-lg">
            Discover the latest products at the best prices and
          </p>
          <Button className="mb-4">
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
        <div className="flex justify-center ">
          <Image
            src={products.data[0].images[0]}
            alt="Banner Image"
            width={1000}
            height={500}
            className="w-full  rounded-lg  shadow-lg"
          />
        </div>
      </section>

      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
