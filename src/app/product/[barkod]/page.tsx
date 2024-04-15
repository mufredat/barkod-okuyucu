import ProductCard from "@/components/ProductCard";
import {getProduct} from "@/app/services/ofaService";


export default async function Product({ params }: { params: { barkod: string } }) {
    if (!params.barkod) {
        return null;
    }
    const products = await getProduct(params.barkod)


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
