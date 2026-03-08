"use client"

import { Search, ShoppingCart, Truck } from "lucide-react"
import { getCoupangSearchUrl } from "@/lib/products"
import { COUPANG_PARTNERS } from "@/lib/constants"
import { useState, FormEvent } from "react"

interface CoupangBannerProps {
  /** 파트너스 대시보드에서 생성한 배너 위젯 ID (있으면 iframe 노출) */
  widgetId?: string
  /** 배너 템플릿 타입 */
  template?: "carousel" | "banner" | "category"
  /** 배너 너비 */
  width?: number
  /** 배너 높이 */
  height?: number
}

export default function CoupangBanner({
  widgetId,
  template = "carousel",
  width = 680,
  height = 140,
}: CoupangBannerProps) {
  const [query, setQuery] = useState("")

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    window.open(getCoupangSearchUrl(query.trim()), "_blank", "noopener,noreferrer")
    setQuery("")
  }

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <ShoppingCart className="h-5 w-5 text-blue-600" />
          <p className="text-base font-bold text-gray-900">쿠팡에서 직접 검색해보세요</p>
        </div>

        {/* 파트너스 위젯 배너 (widgetId가 있으면 iframe 노출) */}
        {widgetId && (
          <div className="mb-4 flex justify-center">
            <iframe
              src={`${COUPANG_PARTNERS.widgetBaseUrl}?id=${widgetId}&template=${template}&trackingCode=${COUPANG_PARTNERS.trackingCode}&subId=${COUPANG_PARTNERS.subId}&width=${width}&height=${height}&tsource=`}
              width={width}
              height={height}
              frameBorder="0"
              scrolling="no"
              referrerPolicy="unsafe-url"
              className="max-w-full"
              title="쿠팡 파트너스 추천 상품"
            />
          </div>
        )}

        {/* 인라인 검색 */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="찾고 싶은 상품을 검색하세요"
              className="w-full pl-10 pr-20 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              검색
            </button>
          </div>
        </form>

        {/* 빠른 검색 버튼들 */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["오늘의 특가", "로켓배송", "골드박스", "쿠팡 플레이"].map((term) => (
            <a
              key={term}
              href={getCoupangSearchUrl(term)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
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
