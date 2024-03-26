import OpenFoodFacts, {APIResponse} from "openfoodfacts-nodejs";
import ProductCard from "@/components/ProductCard";


export default async function Product({ params }: { params: { barkod: string } }) {
    if (!params.barkod) {
        return null;
    }
    const client = new OpenFoodFacts();
    const products: APIResponse.Products = await client.getProduct(params.barkod)


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
