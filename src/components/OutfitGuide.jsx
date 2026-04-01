// 옷차림 가이드 — 8단계 세분화, 오후 온도 고려

function getOutfit(temp) {
  if (temp >= 28) return {
    label: '무더운 날', icon: '☀️', color: '#FF4500', bg: '#FFF3EE', tagBg: '#FFE8E0',
    items: [
      { cat: '상의', icon: '👕', text: '민소매 / 반팔 티셔츠' },
      { cat: '하의', icon: '🩳', text: '반바지 / 얇은 면 팬츠' },
      { cat: '신발', icon: '👟', text: '통기성 좋은 운동화·샌들' },
      { cat: '액세서리', icon: '🧢', text: '모자 필수 · 선크림 챙기기' },
    ],
    tip: '아이스팩·물통 꼭 챙겨주세요!',
  }
  if (temp >= 23) return {
    label: '따뜻한 날', icon: '🌤️', color: '#FF9500', bg: '#FFF8EE', tagBg: '#FFF0D6',
    items: [
      { cat: '상의', icon: '👕', text: '반팔 티셔츠 / 얇은 긴팔' },
      { cat: '하의', icon: '👖', text: '면 팬츠 / 얇은 청바지' },
      { cat: '신발', icon: '👟', text: '가벼운 운동화' },
      { cat: '액세서리', icon: '🧴', text: '선크림 발라주세요' },
    ],
    tip: '얇은 카디건 하나 가방에!',
  }
  if (temp >= 18) return {
    label: '선선한 날', icon: '🌥️', color: '#34C759', bg: '#EEFFF3', tagBg: '#D6F5E3',
    items: [
      { cat: '상의', icon: '👕', text: '긴팔 티셔츠 / 맨투맨' },
      { cat: '아우터', icon: '🧥', text: '얇은 가디건 / 셔츠 겉옷' },
      { cat: '하의', icon: '👖', text: '일반 청바지 / 면 팬츠' },
      { cat: '신발', icon: '👟', text: '운동화' },
    ],
    tip: '낮엔 덥고 아침엔 쌀쌀해요',
  }
  if (temp >= 15) return {
    label: '쌀쌀한 날', icon: '⛅', color: '#00AEEF', bg: '#EEF8FF', tagBg: '#D6EFFF',
    items: [
      { cat: '상의', icon: '👕', text: '긴팔 티셔츠 + 니트' },
      { cat: '아우터', icon: '🧥', text: '가벼운 바람막이 / 얇은 자켓' },
      { cat: '하의', icon: '👖', text: '두꺼운 면 팬츠 / 청바지' },
      { cat: '신발', icon: '👟', text: '운동화 / 가벼운 부츠' },
    ],
    tip: '체감온도가 낮을 수 있어요',
  }
  if (temp >= 12) return {
    label: '제법 추운 날', icon: '🌬️', color: '#007AFF', bg: '#EEF4FF', tagBg: '#D6E8FF',
    items: [
      { cat: '상의', icon: '🧶', text: '두꺼운 니트 / 후드티' },
      { cat: '아우터', icon: '🧥', text: '트렌치코트 / 봄·가을 점퍼' },
      { cat: '하의', icon: '👖', text: '두꺼운 청바지 / 기모 팬츠' },
      { cat: '액세서리', icon: '🧣', text: '목도리 챙기면 좋아요' },
    ],
    tip: '내복 입혀도 좋은 날씨예요',
  }
  if (temp >= 8) return {
    label: '꽤 추운 날', icon: '🥶', color: '#5856D6', bg: '#F2F0FF', tagBg: '#E0DEFF',
    items: [
      { cat: '상의', icon: '🧶', text: '기모 후드티 / 두꺼운 니트' },
      { cat: '아우터', icon: '🧥', text: '두꺼운 점퍼 / 가벼운 패딩' },
      { cat: '하의', icon: '👖', text: '기모 청바지 / 내복 + 팬츠' },
      { cat: '액세서리', icon: '🧤', text: '장갑 · 목도리 추천' },
    ],
    tip: '내복 꼭 입혀주세요!',
  }
  if (temp >= 5) return {
    label: '많이 추운 날', icon: '❄️', color: '#AF52DE', bg: '#F9EEFF', tagBg: '#EDD6FF',
    items: [
      { cat: '내복', icon: '🩱', text: '내복 (상하의) 필수!' },
      { cat: '아우터', icon: '🧥', text: '두꺼운 패딩 / 롱 코트' },
      { cat: '하의', icon: '👖', text: '기모 레깅스 + 팬츠' },
      { cat: '액세서리', icon: '🧤', text: '장갑 · 목도리 · 모자 필수' },
    ],
    tip: '모자·장갑 꼭 챙겨주세요!',
  }
  return {
    label: '매우 추운 날', icon: '🥶', color: '#8B0000', bg: '#FFF0F0', tagBg: '#FFD6D6',
    items: [
      { cat: '내복', icon: '🩱', text: '내복 (상하의) 필수!' },
      { cat: '아우터', icon: '🧥', text: '극세사 패딩 / 헤비다운' },
      { cat: '하의', icon: '👖', text: '기모 내복 + 기모 팬츠' },
      { cat: '액세서리', icon: '🧤', text: '귀마개 · 장갑 · 목도리 필수' },
    ],
    tip: '등원 전 충분히 워밍업!',
  }
}

export default function OutfitGuide({ decision, weather }) {
  // 오후 최고기온 고려 — 아침에 추워도 낮에 더워질 수 있으므로
  const outfitTemp = Math.max(weather.temp, weather.maxTemp)
  const outfit = getOutfit(outfitTemp)

  return (
    <div className="card" style={{
      background: outfit.bg,
      borderRadius: 24,
      padding: 20,
      border: `2px solid ${outfit.color}33`,
      animation: 'fadeUp 0.45s ease both',
    }}>
      {/* 제목 + 온도 범위 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: outfit.color, fontWeight: 800, marginBottom: 2 }}>👚 오늘 옷차림 추천</div>
          <div style={{ fontSize: 20, fontWeight: 900, color: outfit.color }}>
            {outfit.icon} {outfit.label}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ background: outfit.color, color: 'white', borderRadius: 12, padding: '4px 12px', fontSize: 12, fontWeight: 800 }}>
            지금 {weather.temp}° · 오후 {weather.maxTemp}°
          </div>
        </div>
      </div>

      {/* 세분화 아이템 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 12 }}>
        {outfit.items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: outfit.tagBg, borderRadius: 12, padding: '9px 12px',
          }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
            <div>
              <span style={{ fontSize: 10, color: outfit.color, fontWeight: 800, marginRight: 6 }}>{item.cat}</span>
              <span style={{ fontSize: 13, color: '#333', fontWeight: 600 }}>{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 팁 */}
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
