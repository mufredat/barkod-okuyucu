
import ProductCard from "@/components/ProductCard";
import OpenFoodFacts from "openfoodfacts-nodejs";


export default async function Product({ params }: { params: { barkod: string } }) {
    if (!params.barkod) {
        return null;
    }
    // @ts-ignore
    const client = new OpenFoodFacts();
    const products= await client.getProduct(params.barkod)


    return <div>

        {
            products.status === 0 ? <h1>{products.status_verbose}</h1>: null
        }

        {products.product ? <ProductCard product={products.product}/> : null }

        { /*<pre>
            <code>
                {JSON.stringify(products, null, 2)}
            </code>
        </pre>
        */}
    </div>
}
