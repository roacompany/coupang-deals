import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import CoupangBanner from "@/components/CoupangBanner"
import { categories, getCuratedByCategory, getCoupangSearchUrl } from "@/lib/products"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return {}
  return {
    title: `${category.name} 추천 상품`,
    description: `${category.name} 카테고리의 엄선된 인기 추천 상품을 쿠팡 최저가로`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const items = getCuratedByCategory(slug)

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        홈으로
      </Link>

      {/* Category Header */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{category.emoji}</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick keyword search */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">인기 키워드로 바로 검색</p>
        <div className="flex flex-wrap gap-2">
          {category.keywords.map((keyword) => (
            <a
              key={keyword}
              href={getCoupangSearchUrl(keyword)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              {keyword}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>

      {/* Products */}
      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500">아직 등록된 상품이 없습니다.</p>
          <Link href="/" className="text-blue-600 text-sm mt-2 inline-block">
            홈으로 돌아가기
          </Link>
        </div>
      )}

      {/* Coupang Banner */}
      <CoupangBanner />
    </div>
  )
}
