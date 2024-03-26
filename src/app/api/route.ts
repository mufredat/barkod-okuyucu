import OpenFoodFacts from 'openfoodfacts-nodejs'

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const barkod = searchParams.get('barkod')
    const client = new OpenFoodFacts();
    const product = await client.getProduct(barkod)

    return Response.json({ product })
}
