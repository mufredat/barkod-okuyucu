import Product from "@/app/product/[barkod]/page";
import {kv} from "@vercel/kv";
import openfoodfacts from "openfoodfacts-nodejs";

export const getProduct = async  (barkod:string):Promise<any | null> => {
    let product;

    const vsRes = await kv.get(barkod)

    if (vsRes) {
        product = vsRes
    }  else {
        // @ts-ignore
        const client =  new openfoodfacts();
        const getProductRes = await client.getProduct(barkod)
        if (!getProductRes.status) {
            product = null;
        } else {
            product = getProductRes.product;
            await kv.set(barkod, getProductRes.product)
        }
    }
    return product
}
