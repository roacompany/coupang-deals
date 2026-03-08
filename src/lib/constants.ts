export const SITE_NAME = "딜모아"
export const SITE_DESCRIPTION = "매일 엄선된 최저가 상품을 만나보세요"
export const SITE_URL = "https://coupang-deals.vercel.app"

// 쿠팡 파트너스 설정
// 파트너스 가입 후 아래 값들을 실제 값으로 교체하세요
export const COUPANG_PARTNERS = {
  // 파트너스 가입 후 발급받는 sub ID (추적용)
  subId: "dealmoa",
  // 쿠팡 검색 어필리에이트 URL 패턴
  // 실제로는 파트너스에서 "간편링크"로 생성한 URL을 사용
  // 아래는 쿠팡 검색 URL (파트너스 연동 전 기본 동작용)
  searchBaseUrl: "https://www.coupang.com/np/search?component=&q=",
}

// 쿠팡 카테고리 ID 매핑 (실제 쿠팡 카테고리)
export const COUPANG_CATEGORY_IDS: Record<string, string> = {
  electronics: "178236",    // 가전디지털
  living: "115673",         // 생활용품
  food: "194276",           // 식품
  fashion: "186764",        // 패션의류
  beauty: "177524",         // 뷰티
  baby: "176764",           // 출산/유아동
}

// 인기 검색어 (트렌드 기반 수동 큐레이션)
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
