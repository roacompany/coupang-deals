import { SITE_NAME } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-2">{SITE_NAME}</p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
            {SITE_NAME}은 쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
            상품 가격은 변동될 수 있으며, 구매 시 쿠팡에서 확인해주세요.
          </p>
          <p className="text-xs text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
