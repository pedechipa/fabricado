import { brands } from "@/data/brands"
import { notFound } from "next/navigation"

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const brand = brands.find(
    (b) => b.slug === slug
  )

  if (!brand) {
    notFound()
  }

  return (
    <main className="container mx-auto py-20">

      <div className="max-w-4xl">

        <h1 className="text-6xl font-bold">
          {brand.name}
        </h1>

        <p className="mt-6 text-xl text-muted-foreground">
          {brand.description}
        </p>

        <div className="mt-10 flex gap-3">

          <span className="rounded-full border px-4 py-2">
            {brand.category}
          </span>

          <span className="rounded-full border px-4 py-2">
            {brand.priceRange}
          </span>

        </div>

      </div>

    </main>
  )
}