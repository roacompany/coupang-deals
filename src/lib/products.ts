export interface Category {
  slug: string
  name: string
  emoji: string
  description: string
  keywords: string[] // 카테고리별 추천 검색어
}

export interface CuratedItem {
  id: string
  title: string
  keyword: string // 쿠팡 검색 키워드
  description: string
  category: string
  tags: string[]
  isHot?: boolean
}

export const categories: Category[] = [
  {
    slug: "electronics",
    name: "전자제품",
    emoji: "📱",
    description: "스마트폰, 노트북, 태블릿, 이어폰",
    keywords: ["에어팟", "갤럭시버즈", "아이패드", "맥북", "로지텍 마우스", "삼성 모니터", "키보드", "보조배터리"],
  },
  {
    slug: "living",
    name: "생활용품",
    emoji: "🏠",
    description: "주방, 욕실, 청소, 수납",
    keywords: ["다이슨 청소기", "정수기", "전동칫솔", "제습기", "공기청정기", "세탁세제", "수납박스", "커튼"],
  },
  {
    slug: "food",
    name: "식품",
    emoji: "🍜",
    description: "간편식, 건강식품, 음료, 과자",
    keywords: ["닭가슴살", "프로틴바", "유산균", "캡슐커피", "견과류", "비타민", "곰곰", "물"],
  },
  {
    slug: "fashion",
    name: "패션",
    emoji: "👕",
    description: "의류, 신발, 가방, 액세서리",
    keywords: ["나이키 운동화", "리바이스 청바지", "반팔 티셔츠", "슬리퍼", "백팩", "양말", "모자", "선글라스"],
  },
  {
    slug: "beauty",
    name: "뷰티",
    emoji: "💄",
    description: "스킨케어, 메이크업, 헤어, 바디",
    keywords: ["선크림", "토너", "클렌징폼", "마스크팩", "립스틱", "향수", "샴푸", "바디워시"],
  },
  {
    slug: "baby",
    name: "유아동",
    emoji: "👶",
    description: "유아용품, 장난감, 아동복",
    keywords: ["기저귀", "분유", "레고", "장난감", "아동복", "물티슈", "유아식기", "카시트"],
  },
]

// 큐레이션 아이템 (검색 키워드 기반 - API 불필요)
export const curatedItems: CuratedItem[] = [
  // 전자제품
  { id: "e1", title: "에어팟 프로 2세대", keyword: "에어팟 프로 2세대 USB-C", description: "적응형 오디오, USB-C 충전", category: "electronics", tags: ["베스트셀러"], isHot: true },
  { id: "e2", title: "갤럭시 버즈3 프로", keyword: "갤럭시 버즈3 프로", description: "AI 노이즈캔슬링, 360도 오디오", category: "electronics", tags: ["인기상품"], isHot: true },
  { id: "e3", title: "로지텍 MX Master 3S", keyword: "로지텍 MX Master 3S", description: "8000DPI, 조용한 클릭, 멀티디바이스", category: "electronics", tags: ["로켓배송"] },
  { id: "e4", title: "아이패드 10세대", keyword: "아이패드 10세대", description: "10.9인치, A14 칩, USB-C", category: "electronics", tags: ["인기상품"] },
  // 생활용품
  { id: "l1", title: "다이슨 V15 디텍트", keyword: "다이슨 V15 디텍트 무선청소기", description: "레이저 먼지 감지, 60분 사용", category: "living", tags: ["최저가"], isHot: true },
  { id: "l2", title: "LG 퓨리케어 공기청정기", keyword: "LG 퓨리케어 공기청정기", description: "360도 청정, 스마트 센서", category: "living", tags: ["로켓배송"] },
  { id: "l3", title: "필립스 소닉케어 전동칫솔", keyword: "필립스 소닉케어 전동칫솔", description: "3가지 모드, 2분 타이머", category: "living", tags: ["로켓배송"] },
  // 식품
  { id: "f1", title: "곰곰 닭가슴살 스테이크", keyword: "곰곰 닭가슴살 스테이크 혼합", description: "고단백 저지방, 간편조리", category: "food", tags: ["로켓프레시", "베스트"], isHot: true },
  { id: "f2", title: "종근당 프로바이오틱스", keyword: "종근당 프로바이오틱스 유산균", description: "100억 보장균수, 19종 복합유산균", category: "food", tags: ["건강식품"] },
  { id: "f3", title: "스타벅스 캡슐커피", keyword: "스타벅스 캡슐커피 버라이어티", description: "네스프레소 호환, 6가지 맛", category: "food", tags: ["로켓배송"] },
  // 패션
  { id: "fa1", title: "나이키 에어맥스 97", keyword: "나이키 에어맥스 97", description: "풀렝스 에어쿠션, 클래식 디자인", category: "fashion", tags: ["인기"], isHot: true },
  { id: "fa2", title: "리바이스 501 오리지널", keyword: "리바이스 501 오리지널 데님", description: "스트레이트핏, 100% 코튼", category: "fashion", tags: ["패션특가"] },
  // 뷰티
  { id: "b1", title: "이니스프리 데일리 UV 선크림", keyword: "이니스프리 데일리 UV 선크림", description: "SPF36, 산뜻한 발림성", category: "beauty", tags: ["뷰티특가"], isHot: true },
  { id: "b2", title: "라네즈 워터뱅크 크림", keyword: "라네즈 워터뱅크 블루 히알루로닉 크림", description: "48시간 보습, 히알루론산", category: "beauty", tags: ["로켓배송"] },
  // 유아동
  { id: "ba1", title: "레고 클래식 라지 조립박스", keyword: "레고 클래식 라지 조립 박스 10698", description: "790피스, 창의력 발달", category: "baby", tags: ["베스트셀러"], isHot: true },
  { id: "ba2", title: "하기스 맥스드라이 팬티형", keyword: "하기스 맥스드라이 팬티 기저귀", description: "12시간 보송, 3D 에어핏", category: "baby", tags: ["정기배송"] },
]

export function getCuratedByCategory(slug: string): CuratedItem[] {
  return curatedItems.filter((item) => item.category === slug)
}

export function getHotItems(): CuratedItem[] {
  return curatedItems.filter((item) => item.isHot)
}

// 쿠팡 파트너스 어필리에이트 검색 URL 생성
// 쿠팡 검색 페이지로 연결 (파트너스 트래킹 쿠키 적용)
export function getCoupangSearchUrl(keyword: string): string {
  const params = new URLSearchParams({
    component: "",
    q: keyword,
    channel: "user",
    channel_label: "dealmoa",
  })
  return `https://www.coupang.com/np/search?${params.toString()}`
}

// 쿠팡 카테고리 URL 생성
export function getCoupangCategoryUrl(categoryId: string): string {
  return `https://www.coupang.com/np/categories/${categoryId}`
}

// 쿠팡 파트너스 위젯 배너 iframe URL 생성
export function getCoupangWidgetUrl(options: {
  widgetId: string
  template?: string
  width?: number
  height?: number
}): string {
  const { widgetId, template = "carousel", width = 680, height = 140 } = options
  const params = new URLSearchParams({
    id: widgetId,
    template,
    trackingCode: "AF5256637",
    subId: "dealmoa",
    width: width.toString(),
    height: height.toString(),
    tsource: "",
  })
  return `https://ads-partners.coupang.com/widgets.html?${params.toString()}`
}
