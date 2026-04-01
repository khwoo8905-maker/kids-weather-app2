// App.jsx — 껍데기 역할만
// 라우팅 + hook 연결, 판단 로직 없음

import { useState } from 'react'
import { useWeather } from './hooks/useWeather'
import Loading from './components/Loading'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  const { weather, decision, loading, refresh } = useWeather()
  const [page, setPage] = useState('home')

  if (loading) return <Loading />

  if (!weather || !decision) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Noto Sans KR',sans-serif", textAlign: 'center', padding: 20,
      }}>
        <div>
          <div style={{ fontSize: 48, marginBottom: 12 }}>😢</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#333' }}>날씨 정보를 불러올 수 없어요</div>
          <button
            onClick={refresh}
            style={{
              marginTop: 16, padding: '12px 24px', borderRadius: 12,
              background: '#FF9500', color: 'white', border: 'none',
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}
          >
            다시 시도
          </button>
        </div>
      </div>
    )
  }

  if (page === 'settings') {
    return <SettingsPage onBack={() => setPage('home')} />
  }

  return (
    <HomePage
      weather={weather}
      decision={decision}
      refresh={refresh}
      onSettings={() => setPage('settings')}
    />
  )
}
