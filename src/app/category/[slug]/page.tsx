import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import CoupangBanner from "@/components/CoupangBanner"
import { categories, getProductsByCategory } from "@/lib/products"

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
    description: `${category.name} 카테고리의 엄선된 최저가 추천 상품`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(slug)

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
        <div className="flex items-center gap-3">
          <span className="text-4xl">{category.emoji}</span>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{category.name}</h1>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Products */}
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
