export interface Product {
  id: string
  title: string
  description: string
  originalPrice: number
  salePrice: number
  discount: number
  category: string
  imageUrl: string
  affiliateUrl: string
  tags: string[]
  isHot?: boolean
}

export interface Category {
  slug: string
  name: string
  emoji: string
  description: string
}

export const categories: Category[] = [
  { slug: "electronics", name: "전자제품", emoji: "📱", description: "스마트폰, 노트북, 태블릿, 이어폰" },
  { slug: "living", name: "생활용품", emoji: "🏠", description: "주방, 욕실, 청소, 수납" },
  { slug: "food", name: "식품", emoji: "🍜", description: "간편식, 건강식품, 음료, 과자" },
  { slug: "fashion", name: "패션", emoji: "👕", description: "의류, 신발, 가방, 액세서리" },
  { slug: "beauty", name: "뷰티", emoji: "💄", description: "스킨케어, 메이크업, 헤어, 바디" },
  { slug: "baby", name: "유아동", emoji: "👶", description: "유아용품, 장난감, 아동복" },
]

// 큐레이션 상품 데이터 (쿠팡 파트너스 간편링크로 교체 예정)
export const products: Product[] = [
  // 전자제품
  {
    id: "e1",
    title: "삼성 갤럭시 버즈3 프로 무선 이어폰",
    description: "AI 노이즈캔슬링, 360도 오디오, 24시간 배터리",
    originalPrice: 359000,
    salePrice: 269000,
    discount: 25,
    category: "electronics",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder1",
    tags: ["베스트셀러", "무료배송"],
    isHot: true,
  },
  {
    id: "e2",
    title: "애플 에어팟 프로 2세대 USB-C",
    description: "적응형 오디오, 대화 인식, USB-C 충전",
    originalPrice: 359000,
    salePrice: 289000,
    discount: 19,
    category: "electronics",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder2",
    tags: ["인기상품"],
  },
  {
    id: "e3",
    title: "로지텍 MX Master 3S 무선 마우스",
    description: "8000DPI, 조용한 클릭, USB-C 충전, 멀티디바이스",
    originalPrice: 149000,
    salePrice: 109000,
    discount: 27,
    category: "electronics",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder3",
    tags: ["로켓배송"],
  },
  // 생활용품
  {
    id: "l1",
    title: "다이슨 V15 디텍트 무선청소기",
    description: "레이저 먼지 감지, 60분 사용, LCD 디스플레이",
    originalPrice: 1290000,
    salePrice: 899000,
    discount: 30,
    category: "living",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder4",
    tags: ["최저가", "무료배송"],
    isHot: true,
  },
  {
    id: "l2",
    title: "코웨이 아이콘 정수기 렌탈",
    description: "냉온정수, 자가관리, 월 렌탈료 할인",
    originalPrice: 45900,
    salePrice: 29900,
    discount: 35,
    category: "living",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder5",
    tags: ["렌탈특가"],
  },
  {
    id: "l3",
    title: "필립스 소닉케어 전동칫솔 세트",
    description: "3가지 모드, 2분 타이머, 여행용 케이스 포함",
    originalPrice: 89000,
    salePrice: 59000,
    discount: 34,
    category: "living",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder6",
    tags: ["로켓배송"],
  },
  // 식품
  {
    id: "f1",
    title: "곰곰 닭가슴살 스테이크 혼합 30팩",
    description: "고단백 저지방, 전자레인지 간편조리",
    originalPrice: 39900,
    salePrice: 27900,
    discount: 30,
    category: "food",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder7",
    tags: ["로켓프레시", "베스트"],
    isHot: true,
  },
  {
    id: "f2",
    title: "스타벅스 캡슐커피 버라이어티 팩 60개입",
    description: "네스프레소 호환, 6가지 맛 구성",
    originalPrice: 49900,
    salePrice: 35900,
    discount: 28,
    category: "food",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder8",
    tags: ["로켓배송"],
  },
  {
    id: "f3",
    title: "종근당 프로바이오틱스 유산균 6개월분",
    description: "100억 보장균수, 19종 복합유산균",
    originalPrice: 59800,
    salePrice: 29900,
    discount: 50,
    category: "food",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder9",
    tags: ["건강식품", "할인"],
  },
  // 패션
  {
    id: "fa1",
    title: "나이키 에어맥스 97 남여공용 운동화",
    description: "풀렝스 에어쿠션, 클래식 디자인",
    originalPrice: 199000,
    salePrice: 139000,
    discount: 30,
    category: "fashion",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder10",
    tags: ["로켓배송", "인기"],
    isHot: true,
  },
  {
    id: "fa2",
    title: "리바이스 501 오리지널 데님 팬츠",
    description: "스트레이트핏, 100% 코튼",
    originalPrice: 129000,
    salePrice: 79900,
    discount: 38,
    category: "fashion",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder11",
    tags: ["패션특가"],
  },
  // 뷰티
  {
    id: "b1",
    title: "에스티로더 어드밴스드 나이트 리페어 50ml",
    description: "7가지 복합 리페어 세럼, 안티에이징",
    originalPrice: 145000,
    salePrice: 98000,
    discount: 32,
    category: "beauty",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder12",
    tags: ["뷰티특가", "무료배송"],
    isHot: true,
  },
  {
    id: "b2",
    title: "라네즈 워터뱅크 블루 히알루로닉 크림",
    description: "48시간 보습, 히알루론산 함유",
    originalPrice: 42000,
    salePrice: 29800,
    discount: 29,
    category: "beauty",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder13",
    tags: ["로켓배송"],
  },
  // 유아동
  {
    id: "ba1",
    title: "레고 클래식 라지 조립 박스 10698",
    description: "790피스, 다양한 색상, 창의력 발달",
    originalPrice: 69900,
    salePrice: 44900,
    discount: 36,
    category: "baby",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder14",
    tags: ["베스트셀러", "로켓배송"],
    isHot: true,
  },
  {
    id: "ba2",
    title: "하기스 맥스드라이 팬티 기저귀 4단계",
    description: "12시간 보송, 3D 에어핏",
    originalPrice: 52900,
    salePrice: 36900,
    discount: 30,
    category: "baby",
    imageUrl: "/images/placeholder.svg",
    affiliateUrl: "https://link.coupang.com/a/placeholder15",
    tags: ["로켓배송", "정기배송"],
  },
]

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug)
}

export function getHotDeals(): Product[] {
  return products.filter((p) => p.isHot)
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR")
}
