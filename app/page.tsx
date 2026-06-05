import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="container mx-auto px-4 py-10">
        <Catalog />
      </main>
    </>
  )
}