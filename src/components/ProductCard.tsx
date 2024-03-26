import OpenFoodFacts from "openfoodfacts-nodejs";
import Image from "next/image";


type ProductProps = {
    product: OpenFoodFacts.APIResponse.Product
};

export default function ProductCard({product}:ProductProps){
    return (
        <div>
            Product name: {product.product_name}

            <Image src={product.image_front_url} alt={product.product_name} />
        </div>
    );
}
