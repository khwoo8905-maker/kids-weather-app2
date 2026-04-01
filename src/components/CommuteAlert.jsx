// 등원 주의사항 — 리스크가 있을 때만 표시
import { evaluateCommuteRisks } from '../utils/commuteRiskEvaluator'

export default function CommuteAlert({ weather }) {
  const { risks, recommendations } = evaluateCommuteRisks({
    feelsLike: weather.feelsLike,
    pm10: weather.pm10,
    pm25: weather.pm25,
  })

  if (recommendations.length === 0) return null

  return (
    <div className="card" style={{
      background: 'linear-gradient(135deg, #FF3B3018, #FF950018)',
      borderRadius: 24,
      padding: 20,
      border: '2px solid #FF3B3033',
      animation: 'fadeUp 0.45s ease both',
    }}>
      <div style={{ fontSize: 11, color: '#FF3B30', fontWeight: 800, marginBottom: 12 }}>
        ⚠️ 오늘 주의사항
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {recommendations.map((rec, i) => (
          <div key={i} style={{
            background: 'white',
            borderRadius: 12,
            padding: '12px 14px',
            fontSize: 14,
            fontWeight: 700,
            color: '#333',
          }}>
            {rec}
          </div>
        ))}
      </div>
    </div>
  )
}
