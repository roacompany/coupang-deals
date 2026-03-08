import Link from "next/link"
import { categories } from "@/lib/products"

export default function CategorySection() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-bold text-gray-900 mb-4 px-1">카테고리</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-sm font-medium text-gray-700">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
