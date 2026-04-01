// 최종 UX 흐름: WeatherSummary → CommuteAlert → OutfitGuide → CommuteChecklist
// 스크롤 최소, 생각 필요 없음

import WeatherSummary from '../components/WeatherSummary'
import OutfitGuide from '../components/OutfitGuide'
import CommuteAlert from '../components/CommuteAlert'
import CommuteChecklist from '../components/CommuteChecklist'

export default function HomePage({ weather, decision, refresh, onSettings }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #FFF8F0 0%, #FFFBF5 40%, #EEF6FF 100%)',
      fontFamily: "'Noto Sans KR','Apple SD Gothic Neo',sans-serif",
      paddingBottom: 40,
      maxWidth: 420,
      margin: '0 auto',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        .card{animation:fadeUp 0.45s ease both;}
      `}</style>

      {/* 1. 결론 한 문장 */}
      <WeatherSummary decision={decision} weather={weather} />

      <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 13 }}>
        {/* 2. 주의사항 (리스크 있을 때만) */}
        <CommuteAlert weather={weather} />

        {/* 3. 옷차림 가이드 */}
        <OutfitGuide decision={decision} />

        {/* 4. 준비물 체크리스트 — 심리적 종료 */}
        <CommuteChecklist decision={decision} weather={weather} />

        {/* 새로고침 + 설정 */}
        <button
          onClick={refresh}
          style={{
            background: 'linear-gradient(135deg, #FF9500, #FF6B35)',
            color: 'white', border: 'none', borderRadius: 20,
            padding: '14px 0', fontSize: 15, fontWeight: 800,
            cursor: 'pointer', width: '100%',
            boxShadow: '0 4px 20px rgba(255,149,0,0.35)',
          }}
        >
          🔄 새로고침
        </button>

        <button
          onClick={onSettings}
          style={{
            background: 'white', color: '#667EEA',
            border: '2px solid #667EEA33', borderRadius: 20,
            padding: '12px 0', fontSize: 14, fontWeight: 700,
            cursor: 'pointer', width: '100%',
          }}
        >
          ⚙️ 설정
        </button>

        <div style={{ textAlign: 'center', fontSize: 11, color: '#CCC' }}>
          오늘도 안전한 등원 되세요 🌟
        </div>
      </div>
    </div>
  )
}
