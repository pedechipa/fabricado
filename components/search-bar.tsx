"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Props {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar marcas..."
        className="pl-10 h-12"
      />
    </div>
  )
}