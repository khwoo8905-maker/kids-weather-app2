// 개인화 설정 — localStorage, 로그인 없음
import { useState, useEffect } from 'react'

const DEFAULTS = {
  commuteTime: '08:00',
  ageGroup: 'kindergarten', // kindergarten | elementary
}

function loadSettings() {
  try {
    const saved = localStorage.getItem('commute-settings')
    return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS
  } catch {
    return DEFAULTS
  }
}

function saveSettings(settings) {
  localStorage.setItem('commute-settings', JSON.stringify(settings))
}

export function getSettings() {
  return loadSettings()
}

export default function SettingsPage({ onBack }) {
  const [settings, setSettings] = useState(loadSettings)

  useEffect(() => {
    saveSettings(settings)
  }, [settings])

  // 알림 권한 요청
  function requestNotification() {
    if ('Notification' in window) {
      Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
          new Notification('등원 날씨 알림', {
            body: '아침 알림이 설정되었어요 🔔',
            icon: '/icon-192.png',
          })
        }
      })
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #FFF8F0 0%, #FFFBF5 40%, #EEF6FF 100%)',
      fontFamily: "'Noto Sans KR','Apple SD Gothic Neo',sans-serif",
      maxWidth: 420, margin: '0 auto',
    }}>
      {/* 헤더 */}
      <div style={{
        background: 'linear-gradient(135deg, #667EEA, #764BA2)',
        borderRadius: '0 0 32px 32px',
        padding: '32px 24px 28px',
        color: 'white',
      }}>
        <div onClick={onBack} style={{ fontSize: 14, cursor: 'pointer', marginBottom: 8, opacity: 0.8 }}>
          ← 돌아가기
        </div>
        <div style={{ fontSize: 22, fontWeight: 900 }}>⚙️ 설정</div>
      </div>

      <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 13 }}>
        {/* 등원 시간 */}
        <div style={{
          background: 'white', borderRadius: 24, padding: 20,
          border: '2px solid #F0F0F0',
        }}>
          <div style={{ fontSize: 11, color: '#667EEA', fontWeight: 800, marginBottom: 12 }}>
            🕐 등원 시간
          </div>
          <div style={{ fontSize: 13, color: '#999', marginBottom: 10 }}>
            설정한 시간 30분 전에 알림을 보내드려요
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['07:30', '08:00', '08:30', '09:00'].map(t => (
              <button
                key={t}
                onClick={() => setSettings(s => ({ ...s, commuteTime: t }))}
                style={{
                  flex: 1, padding: '10px 0', borderRadius: 12,
                  border: settings.commuteTime === t ? '2px solid #667EEA' : '2px solid #E5E5E5',
                  background: settings.commuteTime === t ? '#667EEA' : 'white',
                  color: settings.commuteTime === t ? 'white' : '#333',
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 아이 연령대 */}
        <div style={{
          background: 'white', borderRadius: 24, padding: 20,
          border: '2px solid #F0F0F0',
        }}>
          <div style={{ fontSize: 11, color: '#FF9500', fontWeight: 800, marginBottom: 12 }}>
            👶 아이 연령대
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { key: 'kindergarten', label: '유치원', icon: '🎒' },
              { key: 'elementary', label: '초등 저학년', icon: '🏫' },
            ].map(opt => (
              <button
                key={opt.key}
                onClick={() => setSettings(s => ({ ...s, ageGroup: opt.key }))}
                style={{
                  flex: 1, padding: '14px 0', borderRadius: 12,
                  border: settings.ageGroup === opt.key ? '2px solid #FF9500' : '2px solid #E5E5E5',
                  background: settings.ageGroup === opt.key ? '#FF9500' : 'white',
                  color: settings.ageGroup === opt.key ? 'white' : '#333',
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                }}
              >
                {opt.icon} {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 알림 설정 */}
        <div style={{
          background: 'white', borderRadius: 24, padding: 20,
          border: '2px solid #F0F0F0',
        }}>
          <div style={{ fontSize: 11, color: '#34C759', fontWeight: 800, marginBottom: 12 }}>
            🔔 아침 알림
          </div>
          <div style={{ fontSize: 13, color: '#999', marginBottom: 12 }}>
            매일 등원 시간 30분 전에 알림을 받아보세요
          </div>
          <button
            onClick={requestNotification}
            style={{
              width: '100%', padding: '14px 0', borderRadius: 12,
              border: 'none', background: '#34C759', color: 'white',
              fontSize: 15, fontWeight: 800, cursor: 'pointer',
            }}
          >
            🔔 알림 허용하기
          </button>
        </div>
      </div>
    </div>
  )
}
