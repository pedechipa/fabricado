import { Search } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        <div>
          <h1 className="text-xl font-bold">
            ProdutoBrasileiro
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#">Moda</a>
          <a href="#">Calçados</a>
          <a href="#">Joias</a>
          <a href="#">Marcas</a>
        </div>

        <Search className="h-5 w-5" />
      </div>
    </header>
  )
}