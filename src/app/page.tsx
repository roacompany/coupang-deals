import { ArrowRight, Flame, Search, Sparkles } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import CategorySection from "@/components/CategorySection"
import CoupangBanner from "@/components/CoupangBanner"
import TrendingSearch from "@/components/TrendingSearch"
import { getHotItems, categories, getCuratedByCategory } from "@/lib/products"
import { SITE_NAME, BANNERS } from "@/lib/constants"

export default function HomePage() {
  const hotItems = getHotItems()

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 md:p-10 mb-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-yellow-300" />
          <span className="text-sm font-medium text-blue-200">매일 업데이트</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          오늘의 추천 딜
        </h1>
        <p className="text-blue-200 text-sm md:text-base mb-4">
          {SITE_NAME}이 엄선한 인기 상품을 쿠팡 최저가로 만나보세요
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Search className="h-3 w-3" /> 검색 즉시 쿠팡 연결
          </span>
          <span className="bg-white/20 px-2.5 py-1 rounded-full">
            로켓배송 무료배송
          </span>
        </div>
      </section>

      {/* Trending Search */}
      <TrendingSearch />

      {/* Categories */}
      <CategorySection />

      {/* Hot Items */}
      <section className="py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Flame className="h-5 w-5 text-red-500" />
            핫딜 추천
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {hotItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Coupang Search Banner */}
      <CoupangBanner banner={BANNERS[0]} />

      {/* Category Sections */}
      {categories.slice(0, 3).map((cat) => {
        const items = getCuratedByCategory(cat.slug)
        if (items.length === 0) return null
        return (
          <section key={cat.slug} className="py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {cat.emoji} {cat.name} 추천
              </h2>
              <Link
                href={`/category/${cat.slug}`}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                더보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {items.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )
      })}

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-white rounded-xl border border-gray-100 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
          <br />
          상품의 가격은 변동될 수 있으며, 최종 가격은 쿠팡에서 확인해주세요.
        </p>
      </div>
    </div>
  )
}
