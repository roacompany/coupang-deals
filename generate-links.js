// ============================================
// 쿠팡 파트너스 간편링크 일괄 생성 스크립트
// ============================================
// 사용법:
// 1. partners.coupang.com 로그인
// 2. 브라우저 개발자도구(F12) > Console 탭
// 3. 이 스크립트 전체를 복사하여 붙여넣기 후 Enter
// 4. 결과가 콘솔에 출력됩니다
// ============================================

const keywords = [
  { id: "d1", name: "하기스 맥스드라이 팬티 기저귀" },
  { id: "d2", name: "팸퍼스 베이비드라이 밴드형 기저귀" },
  { id: "d3", name: "페넬로페 아기 물티슈 캡형" },
  { id: "d4", name: "보솜이 리얼코튼 팬티형 기저귀" },
  { id: "f1", name: "남양유업 임페리얼 XO 분유" },
  { id: "f2", name: "닥터브라운 젖병 옵션플러스" },
  { id: "f3", name: "베베쿡 이유식 큐브" },
  { id: "f4", name: "에디슨 프렌즈 유아 수저 세트" },
  { id: "s1", name: "아토팜 MLE 크림" },
  { id: "s2", name: "그린핑거 유아 선크림" },
  { id: "s3", name: "존슨즈 베이비 탑투토 워시" },
  { id: "c1", name: "밤비니 아기 내의 세트" },
  { id: "c2", name: "아기 우주복 겨울" },
  { id: "g1", name: "스토케 비트 유모차" },
  { id: "g2", name: "다이치 원픽스360 카시트" },
  { id: "g3", name: "코니 아기띠 플렉스" },
  { id: "t1", name: "레고 듀플로 놀이공원" },
  { id: "t2", name: "피셔프라이스 아기 체육관" },
  { id: "t3", name: "알집매트 놀이매트" },
  { id: "t4", name: "사운드북 아기 첫 동요" },
];

async function generateLinks() {
  const results = [];

  for (const item of keywords) {
    try {
      // 1. 상품 검색
      const searchRes = await fetch(`/api/v1/search?keyword=${encodeURIComponent(item.name)}&limit=1`);
      const searchData = await searchRes.json();

      if (searchData.data && searchData.data.length > 0) {
        const product = searchData.data[0];
        const productUrl = `https://www.coupang.com/vp/products/${product.productId}`;

        // 2. 간편링크 생성
        const linkRes = await fetch(`/api/v1/url/any?coupangUrl=${encodeURIComponent(productUrl)}`);
        const linkData = await linkRes.json();

        results.push({
          id: item.id,
          name: item.name,
          productName: product.productName,
          affiliateUrl: linkData.data?.shortenUrl || linkData.shortenUrl || "생성 실패",
          productUrl: productUrl,
        });
      } else {
        results.push({ id: item.id, name: item.name, affiliateUrl: "검색 결과 없음" });
      }

      // 레이트 리밋 방지 (1초 대기)
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      results.push({ id: item.id, name: item.name, affiliateUrl: `에러: ${e.message}` });
    }
  }

  // 결과 출력
  console.log("\n========== 생성된 어필리에이트 링크 ==========\n");
  const output = results.map(r => `${r.id}: ${r.name} → ${r.affiliateUrl}`).join("\n");
  console.log(output);
  console.log("\n\n위 결과를 복사해서 Claude에게 전달해주세요!");

  // 복사하기 쉽게 JSON으로도 출력
  console.log("\n========== JSON (코드 반영용) ==========\n");
  console.log(JSON.stringify(results, null, 2));

  return results;
}

generateLinks();
