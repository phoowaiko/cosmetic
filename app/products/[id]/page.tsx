import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";

const Productpage = async ({ params }: { params: { id: string } }) => {
  const productId = await params.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(product));

  return <ProductDetail product={plainProduct} />;
};

export default Productpage;
