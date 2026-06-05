import Link from "next/link"
import { Star } from "lucide-react"
import { Brand } from "@/types/brand"

export function BrandCard({
  brand,
}: {
  brand: Brand
}) {
  return (
    <Link href={`/brands/${brand.slug}`}>

      <article className="group overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        <div className="aspect-[16/9] rounded-2xl bg-zinc-100" />

        <div className="mt-5">

          <h3 className="font-semibold text-lg">
            {brand.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {brand.description}
          </p>

          <div className="mt-4 flex items-center justify-between">

            <span className="rounded-full border px-3 py-1 text-xs">
              {brand.category}
            </span>

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              {brand.rating}
            </div>

          </div>

        </div>

      </article>

    </Link>
  )
}