import openfoodfacts from "openfoodfacts-nodejs";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/app/Navbar";

export default async function Product({
  params,
}: {
  params: { barkod: string };
}) {
  if (!params.barkod) {
    return null;
  }
  // @ts-ignore
  const client = new openfoodfacts();
  const products = await client.getProduct(params.barkod);

  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        {products.status === 0 ? <h1>{products.status_verbose}</h1> : null}

        {products.product ? <ProductCard product={products.product} /> : null}
      </div>
    </>
  );
}
