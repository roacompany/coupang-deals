"use client"

import Link from "next/link"
import { useState, FormEvent } from "react"
import { Search, Menu, X, Baby } from "lucide-react"
import { Input } from "@/components/ui/input"
import { categories, getCoupangSearchUrl } from "@/lib/products"
import { SITE_NAME } from "@/lib/constants"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (!searchQuery.trim()) return
    window.open(getCoupangSearchUrl(searchQuery.trim()), "_blank", "noopener,noreferrer")
    setSearchQuery("")
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center text-xs py-1.5 px-4">
        엄마아빠가 직접 고른 육아용품 최저가 추천
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Baby className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold text-gray-900">{SITE_NAME}</span>
          </Link>

          {/* Search - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="육아용품 검색... (예: 기저귀, 분유, 유모차)"
                className="pl-10 pr-16 bg-gray-50 border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-pink-600 transition-colors"
              >
                검색
              </button>
            </div>
          </form>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Category nav - desktop */}
        <nav className="hidden md:flex gap-1 pb-2 overflow-x-auto">
          <Link
            href="/"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors whitespace-nowrap"
          >
            🔥 인기 추천
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors whitespace-nowrap"
            >
              {cat.emoji} {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="p-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="육아용품 검색..."
                className="pl-10 pr-16 bg-gray-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs font-medium px-3 py-1.5 rounded-md"
              >
                검색
              </button>
            </form>
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-pink-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                🔥 인기 추천
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.emoji} {cat.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
