export interface Brand {
    id: string
    slug: string
    name: string
    category?: string
    subcategory?: string
    logo?: string
    description?: string
    website?: string
    founded?: number
    country?: string
    headquarters?: string
    founders?: string[]
    style?: string
    priceRange?: "$" | "$$" | "$$$" | "$$$$"
    rating?: number
    featured?: boolean
    tags?: string[]
  }