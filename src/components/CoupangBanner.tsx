"use client"

export default function CoupangBanner() {
  // 쿠팡 파트너스 동적배너 영역
  // 파트너스 대시보드에서 생성한 스크립트 코드를 여기에 삽입
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      <div className="text-center">
        <p className="text-sm text-blue-600 font-medium mb-1">쿠팡 추천 상품</p>
        <p className="text-xs text-gray-500">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
        {/*
          쿠팡 파트너스 동적배너 코드 삽입 위치
          파트너스 대시보드 > 링크생성 > 배너생성 에서 코드를 생성하세요

          예시:
          <script src="https://ads-partners.coupang.com/g/..." type="text/javascript"></script>
        */}
        <div
          id="coupang-dynamic-banner"
          className="mt-4 min-h-[100px] flex items-center justify-center text-gray-400 text-sm"
        >
          [쿠팡 파트너스 동적배너 영역]
        </div>
      </div>
    </div>
  )
}
