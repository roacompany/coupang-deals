export interface Category {
  slug: string
  name: string
  emoji: string
  description: string
  keywords: string[]
}

export interface CuratedItem {
  id: string
  title: string
  keyword: string
  description: string
  category: string
  tags: string[]
  isHot?: boolean
}

export const categories: Category[] = [
  {
    slug: "diaper",
    name: "기저귀·물티슈",
    emoji: "🧷",
    description: "팬티형, 밴드형, 물티슈, 기저귀 크림",
    keywords: ["하기스 기저귀", "팸퍼스 기저귀", "물티슈", "기저귀 크림", "기저귀 정리함", "밤용 기저귀"],
  },
  {
    slug: "feeding",
    name: "수유·이유식",
    emoji: "🍼",
    description: "분유, 젖병, 이유식, 유아식기",
    keywords: ["분유", "젖병", "이유식 재료", "유아 식기", "이유식 마스터기", "빨대컵", "턱받이"],
  },
  {
    slug: "skincare",
    name: "스킨케어·목욕",
    emoji: "🧴",
    description: "아기 로션, 바디워시, 선크림, 욕조",
    keywords: ["아기 로션", "아기 바디워시", "아기 선크림", "아기 욕조", "아기 샴푸", "보습크림"],
  },
  {
    slug: "clothing",
    name: "아동복·외출",
    emoji: "👶",
    description: "내의, 외출복, 잠옷, 양말, 모자",
    keywords: ["아기 내의", "아기 우주복", "유아 잠옷", "아기 양말", "아기 모자", "아동복 세트"],
  },
  {
    slug: "gear",
    name: "유모차·카시트",
    emoji: "🚼",
    description: "유모차, 카시트, 아기띠, 힙시트",
    keywords: ["유모차", "카시트", "아기띠", "힙시트", "유모차 악세서리", "보행기"],
  },
  {
    slug: "toys",
    name: "장난감·교육",
    emoji: "🧸",
    description: "완구, 교구, 그림책, 놀이매트",
    keywords: ["레고 듀플로", "놀이매트", "아기 그림책", "치발기", "모빌", "소꿉놀이", "블록"],
  },
]

export const curatedItems: CuratedItem[] = [
  // 기저귀·물티슈
  { id: "d1", title: "하기스 맥스드라이 팬티형", keyword: "하기스 맥스드라이 팬티 기저귀", description: "12시간 보송, 3D 에어핏 시스템", category: "diaper", tags: ["로켓배송", "베스트"], isHot: true },
  { id: "d2", title: "팸퍼스 베이비드라이 밴드형", keyword: "팸퍼스 베이비드라이 밴드형 기저귀", description: "최대 12시간 흡수, 부드러운 촉감", category: "diaper", tags: ["인기상품"] },
  { id: "d3", title: "페넬로페 아기 물티슈 캡형", keyword: "페넬로페 아기 물티슈 캡형", description: "도톰한 엠보싱, 순수 99% 정제수", category: "diaper", tags: ["정기배송"], isHot: true },
  { id: "d4", title: "보솜이 리얼코튼 팬티형", keyword: "보솜이 리얼코튼 팬티형 기저귀", description: "유기농 코튼 커버, 피부 자극 최소화", category: "diaper", tags: ["로켓배송"] },

  // 수유·이유식
  { id: "f1", title: "남양유업 임페리얼 XO 분유", keyword: "남양유업 임페리얼 XO 분유", description: "HMO 함유, 두뇌·면역 발달", category: "feeding", tags: ["베스트셀러"], isHot: true },
  { id: "f2", title: "닥터브라운 젖병 옵션플러스", keyword: "닥터브라운 젖병 옵션플러스", description: "배앓이 방지 내부 통기 시스템", category: "feeding", tags: ["로켓배송"] },
  { id: "f3", title: "베베쿡 이유식 큐브", keyword: "베베쿡 이유식 큐브", description: "간편한 큐브형 냉동 이유식", category: "feeding", tags: ["인기상품"], isHot: true },
  { id: "f4", title: "에디슨 프렌즈 유아 수저 세트", keyword: "에디슨 프렌즈 유아 수저 세트", description: "올바른 젓가락질 교정, 스텐 소재", category: "feeding", tags: ["로켓배송"] },

  // 스킨케어·목욕
  { id: "s1", title: "아토팜 MLE 크림", keyword: "아토팜 MLE 크림", description: "세라마이드 보습, 민감 피부 아기용", category: "skincare", tags: ["뷰티특가", "베스트"], isHot: true },
  { id: "s2", title: "그린핑거 유아 선크림", keyword: "그린핑거 유아 선크림 SPF50", description: "SPF50+ PA++++, 순한 무기자차", category: "skincare", tags: ["로켓배송"] },
  { id: "s3", title: "존슨즈 베이비 탑투토 워시", keyword: "존슨즈 베이비 탑투토 워시", description: "머리부터 발끝까지, 순한 세정", category: "skincare", tags: ["인기상품"] },

  // 아동복·외출
  { id: "c1", title: "밤비니 사계절 내의 세트", keyword: "밤비니 아기 내의 세트", description: "순면 100%, 사계절 착용 가능", category: "clothing", tags: ["로켓배송", "인기"], isHot: true },
  { id: "c2", title: "이월드 유아 우주복", keyword: "아기 우주복 겨울", description: "방풍 방한, 지퍼 올인원", category: "clothing", tags: ["겨울필수"] },

  // 유모차·카시트
  { id: "g1", title: "스토케 비트 유모차", keyword: "스토케 비트 유모차", description: "컴팩트 접이식, 양대면 시트", category: "gear", tags: ["프리미엄"], isHot: true },
  { id: "g2", title: "다이치 원픽스360 카시트", keyword: "다이치 원픽스360 카시트", description: "360도 회전, ISOFIX 고정", category: "gear", tags: ["안전인증", "베스트"] },
  { id: "g3", title: "코니 아기띠 플렉스", keyword: "코니 아기띠 플렉스", description: "신생아부터, 초경량 200g", category: "gear", tags: ["로켓배송"], isHot: true },

  // 장난감·교육
  { id: "t1", title: "레고 듀플로 놀이공원", keyword: "레고 듀플로 놀이공원", description: "대형 블록, 18개월 이상", category: "toys", tags: ["베스트셀러"], isHot: true },
  { id: "t2", title: "피셔프라이스 아기 체육관", keyword: "피셔프라이스 아기 체육관", description: "감각 발달, 음악·빛 놀이", category: "toys", tags: ["로켓배송"] },
  { id: "t3", title: "알집매트 놀이매트", keyword: "알집매트 놀이매트", description: "PVC 프리, 층간소음 방지", category: "toys", tags: ["인기상품"], isHot: true },
  { id: "t4", title: "사운드북 아기 첫 동요", keyword: "사운드북 아기 첫 동요", description: "버튼형 사운드북, 한글·영어 동요", category: "toys", tags: ["교육"] },
]

export function getCuratedByCategory(slug: string): CuratedItem[] {
  return curatedItems.filter((item) => item.category === slug)
}

export function getHotItems(): CuratedItem[] {
  return curatedItems.filter((item) => item.isHot)
}

// 쿠팡 파트너스 어필리에이트 검색 URL
export function getCoupangSearchUrl(keyword: string): string {
  const params = new URLSearchParams({
    component: "",
    q: keyword,
    channel: "user",
    channel_label: "babypick",
  })
  return `https://www.coupang.com/np/search?${params.toString()}`
}

// 쿠팡 카테고리 URL
export function getCoupangCategoryUrl(categoryId: string): string {
  return `https://www.coupang.com/np/categories/${categoryId}`
}
