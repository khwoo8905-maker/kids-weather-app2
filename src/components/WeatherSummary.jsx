// 결론 한 문장 + 온도/비 기본 정보
import { buildWeatherMessage } from '../utils/weatherMessageBuilder'

const BG_COLORS = {
  VERY_COLD: { accent: '#AF52DE' },
  COLD:      { accent: '#5856D6' },
  MILD:      { accent: '#34C759' },
  WARM:      { accent: '#FF9500' },
  HOT:       { accent: '#FF4500' },
}

export default function WeatherSummary({ decision, weather }) {
  const message = buildWeatherMessage(decision)
  const theme = BG_COLORS[decision.tempLevel] || BG_COLORS.MILD

  const now = new Date()
  const dateStr = now.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' })
  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })

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
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 3 }}>🕐 {timeStr} 기준</div>
        </div>
        <div style={{ fontSize: 48, lineHeight: 1, animation: 'float 3s ease-in-out infinite' }}>
          {weather.conditionEmoji}
        </div>
      </div>

      {/* 온도 + 날씨 요약 */}
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 28, fontWeight: 900 }}>{weather.temp}°</div>
        <div style={{ fontSize: 13, opacity: 0.85 }}>
          {weather.friendlyCondition} · 최저 {weather.minTemp}° / 최고 {weather.maxTemp}°
        </div>
      </div>

      {/* 비 + 체감 뱃지 */}
      <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {weather.rainChance > 0 && (
          <div style={{ background: 'rgba(255,255,255,0.22)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 700 }}>
            🌧️ 강수 {weather.rainChance}%
          </div>
        )}
        <div style={{ background: 'rgba(255,255,255,0.22)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 700 }}>
          체감 {weather.feelsLike}°
        </div>
        <div style={{ background: 'rgba(255,255,255,0.22)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 700 }}>
          💨 {weather.wind}km/h
        </div>
      </div>

      {/* 핵심 메시지 */}
      <div style={{
        marginTop: 16,
        fontSize: 18,
        fontWeight: 900,
        lineHeight: 1.4,
        background: 'rgba(255,255,255,0.18)',
        borderRadius: 14,
        padding: '12px 16px',
      }}>
        {message}
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}`}</style>
    </div>
  )
}
