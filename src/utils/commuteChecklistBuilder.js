// 오늘 등원에 필요한 준비물만 자동 생성
// ✅ 중복 제거  ✅ 오늘만 필요한 것만

import { getDustGrade } from './weatherDecisionEngine'

export function buildChecklist({ tempLevel, rainRisk, riskFlags, feelsLike, pm10, pm25 }) {
  const items = new Set()

  // 비
  if (rainRisk !== 'NONE') {
    items.add('우산 ☔')
  }

  // 추위
  if (tempLevel === 'VERY_COLD' || tempLevel === 'COLD') {
    items.add('외투 🧥')
  }

  // 더위
  if (tempLevel === 'HOT' || riskFlags.includes('HEAT_ALERT')) {
    items.add('여벌옷 👕')
    items.add('물병 💧')
  }

  // 미세먼지
  const dustGrade = getDustGrade(pm10, pm25)
  if (dustGrade >= 2) {
    items.add('마스크 😷')
  }

  // 폭염
  if (feelsLike >= 33) {
    items.add('물병 💧')
  }

  // 한파
  if (feelsLike <= -5) {
    items.add('장갑 🧤')
  }

  return [...items]
}
