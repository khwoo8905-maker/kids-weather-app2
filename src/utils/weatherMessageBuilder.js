// 부모에게 보여줄 단 하나의 문장 생성
// ❌ 숫자 사용 금지  ✅ 반드시 행동 포함  ✅ 1문장

const MESSAGES = {
  // 비 관련
  RAIN_HOT:       '비 올 수 있어요. 우산이랑 여벌옷 챙기세요 ☔',
  RAIN_COLD:      '비 오고 추워요. 우산이랑 외투 챙기세요 ☔🧥',
  RAIN_MILD:      '비 올 수 있어요. 우산 챙기세요 ☔',
  // 온도 관련
  VERY_COLD:      '많이 추워요. 패딩 입히고 장갑 챙기세요 🧤',
  COLD:           '쌀쌀해요. 외투 입히세요 🧥',
  HOT:            '더워요. 얇게 입히고 물병 챙기세요 💧',
  HEAT_ALERT:     '폭염이에요. 물병 꼭 챙기고 야외활동 조심하세요 🥵',
  COLD_ALERT:     '한파에요. 완전 방한하고 가세요 🥶',
  // 미세먼지
  AIR_BAD:        '미세먼지 나빠요. 마스크 챙기세요 😷',
  AIR_BAD_RAIN:   '비도 오고 공기도 안 좋아요. 우산이랑 마스크 챙기세요 ☔😷',
  // 기본
  GOOD:           '등원하기 좋은 날씨예요 🙂',
}

export function buildWeatherMessage({ tempLevel, rainRisk, riskFlags }) {
  // 우선순위: 극단 날씨 → 비+복합 → 비 → 미세먼지 → 온도 → 기본
  if (riskFlags.includes('HEAT_ALERT')) return MESSAGES.HEAT_ALERT
  if (riskFlags.includes('COLD_ALERT')) return MESSAGES.COLD_ALERT

  if (riskFlags.includes('RAIN') && riskFlags.includes('AIR_BAD')) return MESSAGES.AIR_BAD_RAIN
  if (riskFlags.includes('RAIN') && tempLevel === 'HOT') return MESSAGES.RAIN_HOT
  if (riskFlags.includes('RAIN') && (tempLevel === 'COLD' || tempLevel === 'VERY_COLD')) return MESSAGES.RAIN_COLD
  if (riskFlags.includes('RAIN')) return MESSAGES.RAIN_MILD

  if (riskFlags.includes('AIR_BAD')) return MESSAGES.AIR_BAD

  if (tempLevel === 'VERY_COLD') return MESSAGES.VERY_COLD
  if (tempLevel === 'COLD') return MESSAGES.COLD
  if (tempLevel === 'HOT') return MESSAGES.HOT

  return MESSAGES.GOOD
}
