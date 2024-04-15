import {getProduct} from "@/app/services/ofaService";

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const barkod = searchParams.get('barkod')
    if (!barkod) {
        return Response.json({ error: 'Missing barkod parameter' })
    }
    const product = await getProduct(barkod)

    return Response.json({ product })
}
