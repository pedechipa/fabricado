"use client"

interface Props {
  category: string
  onCategoryChange: (value: string) => void
}

export function FiltersSidebar({
  category,
  onCategoryChange,
}: Props) {
  return (
    <aside>

      <h3 className="mb-4 font-semibold">
        Categorias
      </h3>

      <div className="space-y-3">

        <label className="flex gap-2">

          <input
            type="radio"
            checked={category === ""}
            onChange={() => onCategoryChange("")}
          />

          Todas

        </label>

        <label className="flex gap-2">

          <input
            type="radio"
            checked={category === "Moda"}
            onChange={() => onCategoryChange("Moda")}
          />

          Moda

        </label>

        <label className="flex gap-2">

          <input
            type="radio"
            checked={category === "Calçados"}
            onChange={() => onCategoryChange("Calçados")}
          />

          Calçados

        </label>

        <label className="flex gap-2">

          <input
            type="radio"
            checked={category === "Joias"}
            onChange={() => onCategoryChange("Joias")}
          />

          Joias

        </label>

      </div>

    </aside>
  )
}