// 날씨 수치 → 부모 의사결정용 판단 결과 변환
// ❌ 숫자 UI 노출 금지  ✅ 판단 결과만 반환

export function getTempLevel(temp) {
  if (temp <= 5) return 'VERY_COLD'
  if (temp <= 11) return 'COLD'
  if (temp <= 22) return 'MILD'
  if (temp <= 27) return 'WARM'
  return 'HOT'
}

export function getRainRisk(rainChance) {
  if (rainChance >= 60) return 'HIGH'
  if (rainChance >= 30) return 'POSSIBLE'
  return 'NONE'
}

export function evaluateWeather({ temp, maxTemp, rainChance, feelsLike, pm10, pm25 }) {
  // 낮 최고기온 기준으로 판단 (아침에 추워도 낮에 더워질 수 있으므로)
  const outfitTemp = Math.max(temp, maxTemp)
  const tempLevel = getTempLevel(outfitTemp)
  const rainRisk = getRainRisk(rainChance)

  const riskFlags = []
  if (rainRisk !== 'NONE') riskFlags.push('RAIN')
  if (tempLevel === 'VERY_COLD' || tempLevel === 'COLD') riskFlags.push('COLD')
  if (tempLevel === 'HOT') riskFlags.push('HOT')
  if (feelsLike >= 33) riskFlags.push('HEAT_ALERT')
  if (feelsLike <= -5) riskFlags.push('COLD_ALERT')

  const dustGrade = getDustGrade(pm10, pm25)
  if (dustGrade >= 2) riskFlags.push('AIR_BAD')

  return { tempLevel, rainRisk, riskFlags }
}

export function getDustGrade(pm10, pm25) {
  const g10 = pm10 <= 30 ? 0 : pm10 <= 50 ? 1 : pm10 <= 80 ? 2 : pm10 <= 150 ? 3 : 4
  const g25 = pm25 <= 15 ? 0 : pm25 <= 25 ? 1 : pm25 <= 50 ? 2 : pm25 <= 75 ? 3 : 4
  return Math.max(g10, g25)
}
