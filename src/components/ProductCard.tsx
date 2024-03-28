/* eslint-disable @next/next/no-img-element */
import OpenFoodFacts from "openfoodfacts-nodejs";

type ProductProps = {
  product: OpenFoodFacts.APIResponse.Product;
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={product.image_front_url}
        alt={product.product_name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal gap-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="text-yellow-500">Product Name:</span>{" "}
          {product.product_name}
        </h5>
        <h3 className="tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">Packaking:</span> {product.packaging}
        </h3>
        <h3 className="tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">Labels, certifications, awards:</span>
          {product.labels}
        </h3>
        <h3 className="tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">
            Origin of the product and/or its ingredients:
          </span>{" "}
          {product.origins}
        </h3>

        <h3 className="tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">Brands:</span> {product.brands}
        </h3>
        <h3 className="tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">Categories:</span>{" "}
          {product.categories}
        </h3>
        <h3 className="tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">Stores:</span> {product.stores}
        </h3>
      </div>
    </a>
  );
}
