import https from "https"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get("url")
  if (!url) return new Response("Missing url", { status: 400 })

  const buffer = await new Promise<Buffer>((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      const chunks: Buffer[] = []
      res.on("data", (chunk) => chunks.push(chunk))
      res.on("end", () => resolve(Buffer.concat(chunks)))
      res.on("error", reject)
    }).on("error", reject)
  })

  return new Response(new Blob([buffer.buffer as ArrayBuffer], { type: "application/pdf" }), {
  headers: {
    "Content-Disposition": 'attachment; filename="brochure.pdf"',
  },
})
}