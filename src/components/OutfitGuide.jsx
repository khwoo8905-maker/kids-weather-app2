// 옷차림 가이드 — 숫자 없이, 행동만

const OUTFIT = {
  VERY_COLD: {
    label: '완전 방한', icon: '🥶', color: '#8B0000', bg: '#FFF0F0',
    items: ['패딩 🧥', '기모 바지 👖', '장갑 🧤', '목도리 🧣'],
    tip: '내복 입히고 가세요!',
  },
  COLD: {
    label: '따뜻하게', icon: '🧥', color: '#5856D6', bg: '#F2F0FF',
    items: ['외투 🧥', '긴팔 👕', '두꺼운 바지 👖'],
    tip: '겉옷 꼭 챙기세요',
  },
  MILD: {
    label: '편하게', icon: '😊', color: '#34C759', bg: '#EEFFF3',
    items: ['긴팔 또는 얇은 겉옷 👕', '편한 바지 👖'],
    tip: '등원하기 딱 좋아요',
  },
  WARM: {
    label: '가볍게', icon: '🌤️', color: '#FF9500', bg: '#FFF8EE',
    items: ['반팔 👕', '얇은 바지 👖', '선크림 🧴'],
    tip: '얇은 겉옷 하나 가방에!',
  },
  HOT: {
    label: '시원하게', icon: '☀️', color: '#FF4500', bg: '#FFF3EE',
    items: ['민소매·반팔 👕', '반바지 🩳', '모자 🧢'],
    tip: '물병 꼭 챙겨주세요!',
  },
}

export default function OutfitGuide({ decision }) {
  const outfit = OUTFIT[decision.tempLevel] || OUTFIT.MILD

  return (
    <div className="card" style={{
      background: outfit.bg,
      borderRadius: 24,
      padding: 20,
      border: `2px solid ${outfit.color}33`,
      animation: 'fadeUp 0.45s ease both',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: outfit.color, fontWeight: 800 }}>👚 오늘 옷차림</div>
          <div style={{ fontSize: 20, fontWeight: 900, color: outfit.color }}>
            {outfit.icon} {outfit.label}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 12 }}>
        {outfit.items.map((item, i) => (
          <div key={i} style={{
            background: `${outfit.color}11`,
            borderRadius: 12,
            padding: '9px 14px',
            fontSize: 14,
            fontWeight: 600,
            color: '#333',
          }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{
        background: 'white', borderRadius: 12, padding: '9px 14px',
        fontSize: 12, color: '#555', fontWeight: 600,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span>💡</span> {outfit.tip}
      </div>
    </div>
  )
}
