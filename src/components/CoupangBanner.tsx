"use client"

import { Search, Heart, Truck } from "lucide-react"
import { getCoupangSearchUrl } from "@/lib/products"
import { useState, FormEvent } from "react"

export interface PartnersBanner {
  affiliateLink: string
  imageUrl: string
  alt?: string
}

interface CoupangBannerProps {
  banner?: PartnersBanner
}

export default function CoupangBanner({ banner }: CoupangBannerProps) {
  const [query, setQuery] = useState("")

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    window.open(getCoupangSearchUrl(query.trim()), "_blank", "noopener,noreferrer")
    setQuery("")
  }

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-pink-100 bg-gradient-to-r from-pink-50 via-white to-rose-50 p-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Heart className="h-5 w-5 text-pink-500" />
          <p className="text-base font-bold text-gray-900">쿠팡에서 육아용품 검색</p>
        </div>

        {/* 파트너스 배너 */}
        {banner && (
          <div className="mb-4 flex justify-center">
            <a
              href={banner.affiliateLink}
              target="_blank"
              referrerPolicy="unsafe-url"
              className="inline-block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banner.imageUrl}
                alt={banner.alt || "쿠팡 육아용품 추천"}
                className="max-w-full h-auto max-h-[300px] object-contain"
              />
            </a>
          </div>
        )}

        {/* 인라인 검색 */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="기저귀, 분유, 유모차 등 검색"
              className="w-full pl-10 pr-20 py-3 rounded-xl border border-pink-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              검색
            </button>
          </div>
        </form>

        {/* 빠른 검색 */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["기저귀 특가", "분유 할인", "유아 로션", "장난감 세일"].map((term) => (
            <a
              key={term}
              href={getCoupangSearchUrl(term)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50 transition-all"
            >
              {term}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
          <Truck className="h-3 w-3" />
          <span>로켓배송 상품 무료배송</span>
        </div>

        <p className="text-[10px] text-gray-400 mt-2">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>
    </div>
  )
}
