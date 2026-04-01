// 아침 알림 문구 생성
// 1~2줄, 행동 중심, 불안/잔소리 ❌

import { buildWeatherMessage } from './weatherMessageBuilder'
import { buildChecklist } from './commuteChecklistBuilder'

export function buildNotificationMessage(decision, weatherData) {
  const mainMsg = buildWeatherMessage(decision)
  const checklist = buildChecklist({
    ...decision,
    feelsLike: weatherData.feelsLike,
    pm10: weatherData.pm10,
    pm25: weatherData.pm25,
  })

  if (checklist.length === 0) {
    return '오늘 등원 준비 간단해요 🙂'
  }

  const itemNames = checklist.map(item => item.split(' ')[0]).join(', ')
  return `${mainMsg}\n준비물: ${itemNames}`
}
