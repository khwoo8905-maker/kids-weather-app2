export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg,#FFF8F0,#EEF6FF)',
      fontFamily: "'Noto Sans KR',sans-serif",
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 52, display: 'inline-block', animation: 'spin 2s linear infinite' }}>🌤️</div>
        <div style={{ marginTop: 12, color: '#FF9500', fontWeight: 700, fontSize: 15 }}>날씨 확인 중...</div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </div>
  )
}
