// 추가 리스크 판단: 미세먼지, 체감온도 극단값
// 출력: { risks, recommendations }

import { getDustGrade } from './weatherDecisionEngine'

export function evaluateCommuteRisks({ feelsLike, pm10, pm25 }) {
  const risks = []
  const recommendations = []

  // 미세먼지
  const dustGrade = getDustGrade(pm10, pm25)
  if (dustGrade >= 2) {
    risks.push('AIR_BAD')
    recommendations.push('마스크 챙기세요 😷')
  }

  // 폭염
  if (feelsLike >= 33) {
    risks.push('HEAT_ALERT')
    recommendations.push('물병 꼭 챙기고 야외활동 줄이세요 🥵')
  }

  // 한파
  if (feelsLike <= -5) {
    risks.push('COLD_ALERT')
    recommendations.push('완전 방한하고 가세요 🥶')
  }

  return { risks, recommendations }
}
