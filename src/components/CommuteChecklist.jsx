// "이것만 챙기면 오늘 등원 준비 끝 ✅"
// 체크박스 UI, 상태 저장 불필요, 심리적 완료감 제공

import { useState } from 'react'
import { buildChecklist } from '../utils/commuteChecklistBuilder'

export default function CommuteChecklist({ decision, weather }) {
  const items = buildChecklist({
    ...decision,
    feelsLike: weather.feelsLike,
    pm10: weather.pm10,
    pm25: weather.pm25,
  })

  const [checked, setChecked] = useState({})

  const allChecked = items.length > 0 && items.every((_, i) => checked[i])

  if (items.length === 0) {
    return (
      <div className="card" style={{
        background: 'linear-gradient(135deg, #34C75918, #00C7BE18)',
        borderRadius: 24,
        padding: 20,
        border: '2px solid #34C75933',
        textAlign: 'center',
        animation: 'fadeUp 0.45s ease both',
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
        <div style={{ fontSize: 16, fontWeight: 900, color: '#34C759' }}>
          오늘은 준비물 없이 가벼운 등원!
        </div>
      </div>
    )
  }

  return (
    <div className="card" style={{
      background: allChecked
        ? 'linear-gradient(135deg, #34C75918, #00C7BE18)'
        : 'linear-gradient(135deg, #667EEA18, #764BA218)',
      borderRadius: 24,
      padding: 20,
      border: `2px solid ${allChecked ? '#34C759' : '#667EEA'}33`,
      animation: 'fadeUp 0.45s ease both',
    }}>
      <div style={{
        fontSize: 11,
        color: allChecked ? '#34C759' : '#667EEA',
        fontWeight: 800,
        marginBottom: 12,
      }}>
        {allChecked ? '✅ 등원 준비 완료!' : '📋 이것만 챙기면 오늘 등원 준비 끝'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setChecked(prev => ({ ...prev, [i]: !prev[i] }))}
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'white', borderRadius: 12, padding: '12px 14px',
              cursor: 'pointer', userSelect: 'none',
              opacity: checked[i] ? 0.5 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            <div style={{
              width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
              background: checked[i] ? '#34C759' : '#E5E5E5',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, color: 'white', fontWeight: 900,
              transition: 'background 0.2s',
            }}>
              {checked[i] ? '✓' : ''}
            </div>
            <div style={{
              fontSize: 15, fontWeight: 700, color: '#333',
              textDecoration: checked[i] ? 'line-through' : 'none',
            }}>
              {item}
            </div>
          </div>
        ))}
      </div>
      {allChecked && (
        <div style={{
          marginTop: 12, textAlign: 'center',
          fontSize: 14, fontWeight: 800, color: '#34C759',
        }}>
          오늘도 안전한 등원 되세요 🌟
        </div>
      )}
    </div>
  )
}
