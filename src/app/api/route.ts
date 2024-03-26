import openfoodfacts from 'openfoodfacts-nodejs'

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const barkod = searchParams.get('barkod')
    if (!barkod) {
        return Response.json({ error: 'Missing barkod parameter' })
    }
    // @ts-ignore
    const client =  new openfoodfacts();
    const product = await client.getProduct(barkod)

    return Response.json({ product })
}
