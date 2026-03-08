"use client"

import { TrendingUp } from "lucide-react"
import { TRENDING_KEYWORDS } from "@/lib/constants"
import { getCoupangSearchUrl } from "@/lib/products"

export default function TrendingSearch() {
  return (
    <section className="py-4">
      <div className="flex items-center gap-2 mb-3 px-1">
        <TrendingUp className="h-4 w-4 text-pink-500" />
        <h2 className="text-sm font-bold text-gray-900">인기 검색어</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {TRENDING_KEYWORDS.map((keyword, i) => (
          <a
            key={keyword}
            href={getCoupangSearchUrl(keyword)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-full text-sm text-gray-700 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50 transition-all whitespace-nowrap shrink-0"
          >
            <span className="text-xs font-bold text-pink-500">{i + 1}</span>
            {keyword}
          </a>
        ))}
      </div>
    </section>
  )
}
