import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type Product, formatPrice } from "@/lib/products"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-300">
          📦
        </div>
        {product.isHot && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            HOT
          </div>
        )}
        {product.discount >= 30 && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        {/* Tags */}
        <div className="flex gap-1 mb-2 flex-wrap">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] px-1.5 py-0 bg-blue-50 text-blue-700 border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-1 mb-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-lg font-bold text-red-600">
            {formatPrice(product.salePrice)}원
          </span>
          <span className="text-xs text-gray-400 line-through mb-0.5">
            {formatPrice(product.originalPrice)}원
          </span>
        </div>

        {/* CTA */}
        <div className="mt-2 flex items-center justify-center gap-1 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg group-hover:bg-blue-700 transition-colors">
          <span>쿠팡에서 보기</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  )
}
