import type { PartnersBanner } from "@/components/CoupangBanner"

export const SITE_NAME = "딜모아"
export const SITE_DESCRIPTION = "매일 엄선된 최저가 상품을 만나보세요"
export const SITE_URL = "https://coupang-deals.vercel.app"

// 쿠팡 파트너스 설정
export const COUPANG_PARTNERS = {
  trackingCode: "AF5256637",
  subId: "dealmoa",
}

// 파트너스 대시보드에서 생성한 배너들
// partners.coupang.com > 링크생성 > 배너생성 에서 코드를 복사해서 여기에 추가
export const BANNERS: PartnersBanner[] = [
  {
    affiliateLink: "https://link.coupang.com/a/dZ2sKJ",
    imageUrl: "https://ads-partners.coupang.com/banners/970635?subId=dealmoa&traceId=V0-301-879dd1202e5c73b2-I970635&w=600&h=900",
    alt: "쿠팡 추천 상품",
  },
  // 배너를 더 추가하려면 파트너스 대시보드에서 생성 후 여기에 추가
]

// 인기 검색어
export const TRENDING_KEYWORDS = [
  "에어팟 프로",
  "다이슨 청소기",
  "닭가슴살",
  "선크림",
  "아이패드",
  "운동화",
  "유산균",
  "제습기",
  "캠핑용품",
  "물티슈",
]
