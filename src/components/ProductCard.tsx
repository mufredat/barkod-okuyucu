import OpenFoodFacts from "openfoodfacts-nodejs";

type ProductProps = {
    product: OpenFoodFacts.APIResponse.Product
};

export default function ProductCard({product}:ProductProps){
    return (
        <div>
            Product name: {product.product_name}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image_front_url} alt={product.product_name} />
        </div>
    );
}
