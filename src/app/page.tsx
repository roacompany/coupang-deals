import { ArrowRight, Clock, Flame, Star } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import CategorySection from "@/components/CategorySection"
import CoupangBanner from "@/components/CoupangBanner"
import { getHotDeals, categories, getProductsByCategory } from "@/lib/products"
import { SITE_NAME } from "@/lib/constants"

export default function HomePage() {
  const hotDeals = getHotDeals()

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 md:p-10 mb-8 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="h-5 w-5 text-orange-300" />
          <span className="text-sm font-medium text-blue-200">매일 업데이트</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          오늘의 추천 딜
        </h1>
        <p className="text-blue-200 text-sm md:text-base mb-4">
          {SITE_NAME}이 엄선한 최저가 상품을 만나보세요
        </p>
        <div className="flex items-center gap-4 text-xs text-blue-200">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            24시간 내 구매 시 적용
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            최대 50% 할인
          </span>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Hot Deals */}
      <section className="py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Flame className="h-5 w-5 text-red-500" />
            핫딜 TOP
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {hotDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Coupang Banner */}
      <CoupangBanner />

      {/* Category Sections */}
      {categories.slice(0, 3).map((cat) => {
        const categoryProducts = getProductsByCategory(cat.slug)
        if (categoryProducts.length === 0) return null
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
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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
