import { revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"
import { parseBody } from "next-sanity/webhook"

type SanityWebhookBody = {
  _type?: string
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 },
    )
  }

  try {
    const { isValidSignature, body } = await parseBody<SanityWebhookBody>(
      req,
      secret,
    )

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 })
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 })
    }

    revalidateTag("sanity", "max")
    return NextResponse.json({ revalidated: true })
  } catch (error) {
    console.error("Sanity revalidation failed", error)
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 })
  }
}
