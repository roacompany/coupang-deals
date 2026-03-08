import type { PartnersBanner } from "@/components/CoupangBanner"

export const SITE_NAME = "베이비픽"
export const SITE_DESCRIPTION = "엄마아빠가 엄선한 육아용품 최저가 추천"
export const SITE_URL = "https://coupang-deals.vercel.app"

// 쿠팡 파트너스 설정
export const COUPANG_PARTNERS = {
  trackingCode: "AF5256637",
  subId: "babypick",
}

// 파트너스 배너
export const BANNERS: PartnersBanner[] = [
  {
    affiliateLink: "https://link.coupang.com/a/dZ2sKJ",
    imageUrl: "https://ads-partners.coupang.com/banners/970635?subId=babypick&traceId=V0-301-879dd1202e5c73b2-I970635&w=600&h=900",
    alt: "쿠팡 육아용품 추천",
  },
]

// 인기 검색어
export const TRENDING_KEYWORDS = [
  "기저귀",
  "분유",
  "물티슈",
  "아기 로션",
  "유아 식기",
  "유모차",
  "카시트",
  "아기띠",
  "레고 듀플로",
  "이유식",
]
