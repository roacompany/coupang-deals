"use client"

import { ExternalLink, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type CuratedItem, getCoupangSearchUrl } from "@/lib/products"

export default function ProductCard({ item }: { item: CuratedItem }) {
  function handleClick() {
    window.open(getCoupangSearchUrl(item.keyword), "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleClick}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-pink-200 transition-all duration-200 text-left w-full"
    >
      {/* Visual */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden flex items-center justify-center">
        <Search className="h-8 w-8 text-pink-200 group-hover:text-pink-400 transition-colors" />
        {item.isHot && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            HOT
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex gap-1 mb-2 flex-wrap">
          {item.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] px-1.5 py-0 bg-pink-50 text-pink-700 border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 group-hover:text-pink-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-1 mb-3">
          {item.description}
        </p>

        <div className="flex items-center justify-center gap-1 bg-pink-500 text-white text-sm font-medium py-2 rounded-lg group-hover:bg-pink-600 transition-colors">
          <span>쿠팡 최저가 보기</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>
    </button>
  )
}
