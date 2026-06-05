"use client"

import { useMemo, useState } from "react"
import { brands } from "@/data/brands"
import { BrandCard } from "./brand-card"
import { SearchBar } from "./search-bar"
import { FiltersSidebar } from "./filters-sidebar"

export function Catalog() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  const filtered = useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch = brand.name
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        !category || brand.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

      <FiltersSidebar
        category={category}
        onCategoryChange={setCategory}
      />

      <div>
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {filtered.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
            />
          ))}

        </div>
      </div>

    </div>
  )
}