import openfoodfacts from 'openfoodfacts-nodejs'
import { kv } from '@vercel/kv'

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const barkod = searchParams.get('barkod')
    if (!barkod) {
        return Response.json({ error: 'Missing barkod parameter' })
    }
    let product;

    const vsRes = await kv.get(barkod)

    if (vsRes) {
        product = vsRes
    }  else {
        // @ts-ignore
        const client =  new openfoodfacts();
        product = await client.getProduct(barkod)
        await kv.set(barkod, product)
    }

    return Response.json({ product })
}
