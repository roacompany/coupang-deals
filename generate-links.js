// ============================================
// 쿠팡 파트너스 간편링크 일괄 생성 스크립트
// ============================================
// 사용법:
// 1. partners.coupang.com 로그인
// 2. 브라우저 개발자도구(F12) > Console 탭
// 3. 이 스크립트 전체를 복사하여 붙여넣기 후 Enter
// 4. 결과가 콘솔에 출력됩니다
// ============================================

const products = [
  { id: "d1", name: "하기스 맥스드라이 팬티 기저귀", url: "https://www.coupang.com/vp/products/1223809484" },
  { id: "d2", name: "팸퍼스 베이비드라이 밴드형 기저귀", url: "https://www.coupang.com/vp/products/1396074" },
  { id: "d3", name: "페넬로페 아기 물티슈 캡형", url: "https://www.coupang.com/vp/products/7816501862" },
  { id: "d4", name: "보솜이 리얼코튼 팬티형 기저귀", url: "https://www.coupang.com/vp/products/114992186" },
  { id: "f1", name: "남양유업 임페리얼 XO 분유", url: "https://www.coupang.com/vp/products/8750584924" },
  { id: "f2", name: "닥터브라운 젖병 옵션플러스", url: "https://www.coupang.com/vp/products/5313134096" },
  { id: "f3", name: "베베쿡 이유식", url: "https://www.coupang.com/vp/products/7748140168" },
  { id: "f4", name: "에디슨 프렌즈 유아 수저 세트", url: "https://www.coupang.com/vp/products/1294713220" },
  { id: "s1", name: "아토팜 MLE 크림", url: "https://www.coupang.com/vp/products/4876504068" },
  { id: "s2", name: "그린핑거 유아 선크림", url: "https://www.coupang.com/vp/products/7227727720" },
  { id: "s3", name: "존슨즈 베이비 탑투토 워시", url: "https://www.coupang.com/vp/products/8483036972" },
  { id: "c1", name: "아기 내의 세트", url: "https://www.coupang.com/vp/products/53552043" },
  { id: "g1", name: "스토케 유모차", url: "https://www.coupang.com/vp/products/8373475948" },
  { id: "g2", name: "다이치 원픽스360 카시트", url: "https://www.coupang.com/vp/products/4624758542" },
  { id: "g3", name: "코니 아기띠 플렉스", url: "https://www.coupang.com/vp/products/7849864830" },
  { id: "t1", name: "레고 듀플로", url: "https://www.coupang.com/vp/products/6889469081" },
  { id: "t2", name: "피셔프라이스 아기 체육관", url: "https://www.coupang.com/vp/products/18534606" },
  { id: "t3", name: "알집매트 놀이매트", url: "https://www.coupang.com/vp/products/4848485791" },
  { id: "t4", name: "사운드북 동요", url: "https://www.coupang.com/vp/products/6239568110" },
];

async function generateLinks() {
  const results = [];
  console.log("🚀 간편링크 생성 시작... (약 20초 소요)");

  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    try {
      const res = await fetch(`/api/v1/url/any?coupangUrl=${encodeURIComponent(item.url)}`);
      const data = await res.json();
      const link = data.data?.shortenUrl || data.shortenUrl || data.url || "실패";
      results.push({ id: item.id, name: item.name, link });
      console.log(`✅ [${i+1}/${products.length}] ${item.name} → ${link}`);
    } catch (e) {
      results.push({ id: item.id, name: item.name, link: `❌ ${e.message}` });
      console.log(`❌ [${i+1}/${products.length}] ${item.name} → 에러`);
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  // 결과 출력
  const output = results.map(r => `${r.id}: ${r.link}`).join("\n");
  console.log("\n\n========== 결과 (이것을 복사해주세요) ==========\n");
  console.log(output);

  // 클립보드에 복사 시도
  try {
    await navigator.clipboard.writeText(output);
    console.log("\n📋 클립보드에 자동 복사되었습니다!");
  } catch(e) {
    console.log("\n📋 위 결과를 수동으로 복사해주세요");
  }

  return results;
}

generateLinks();
