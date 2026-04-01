// 결론 한 문장 — 스크롤 최상단, 3초 안에 행동 결정
import { buildWeatherMessage } from '../utils/weatherMessageBuilder'

const BG_COLORS = {
  VERY_COLD: { bg: '#F0E6FF', color: '#8B0000', accent: '#AF52DE' },
  COLD:      { bg: '#EEF4FF', color: '#007AFF', accent: '#5856D6' },
  MILD:      { bg: '#EEFFF3', color: '#34C759', accent: '#34C759' },
  WARM:      { bg: '#FFF8EE', color: '#FF9500', accent: '#FF9500' },
  HOT:       { bg: '#FFF3EE', color: '#FF4500', accent: '#FF4500' },
}

export default function WeatherSummary({ decision, weather }) {
  const message = buildWeatherMessage(decision)
  const theme = BG_COLORS[decision.tempLevel] || BG_COLORS.MILD

  const now = new Date()
  const dateStr = now.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' })

  return (
    <div style={{
      background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}DD)`,
      borderRadius: '0 0 32px 32px',
      padding: '32px 24px 28px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 12, opacity: 0.85, fontWeight: 600, marginBottom: 2 }}>
            📍 {weather.city} · {dateStr}
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>
            아침 등원 날씨
          </div>
        </div>
        <div style={{ fontSize: 48, lineHeight: 1, animation: 'float 3s ease-in-out infinite' }}>
          {weather.conditionEmoji}
        </div>
      </div>
      {/* 핵심 메시지 — 이것만 보고 행동 */}
      <div style={{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 900,
        lineHeight: 1.4,
        textShadow: '0 1px 4px rgba(0,0,0,0.15)',
      }}>
        {message}
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}`}</style>
    </div>
  )
}
