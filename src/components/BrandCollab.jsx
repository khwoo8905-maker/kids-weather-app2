// 브랜드 콜라보 광고 슬롯

export default function BrandCollab() {
  const brands = [
    { name: '브랜드 A', logo: '🏷️', tag: '파트너' },
    { name: '브랜드 B', logo: '🏷️', tag: '파트너' },
  ]

  return (
    <div className="card" style={{
      background: 'white', borderRadius: 24, padding: 20,
      border: '2px solid #F0F0F0',
      animation: 'fadeUp 0.45s ease both',
    }}>
      <div style={{
        fontSize: 10, color: '#bbb', fontWeight: 700, marginBottom: 10,
        display: 'flex', alignItems: 'center', gap: 4,
      }}>
        <span>🤝</span> 추천 브랜드
        <span style={{ marginLeft: 'auto', fontSize: 9, color: '#ddd' }}>광고</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {brands.map((b, i) => (
          <div key={i} style={{
            flex: 1, background: '#FAFAFA', borderRadius: 12, padding: '12px 8px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            border: '1.5px dashed #E8E8E8', cursor: 'pointer',
          }}>
            <div style={{ fontSize: 24 }}>{b.logo}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#777' }}>{b.name}</div>
            <div style={{
              fontSize: 9, background: '#FF950022', color: '#FF9500',
              borderRadius: 6, padding: '2px 6px', fontWeight: 700,
            }}>{b.tag}</div>
          </div>
        ))}
        <div style={{
          flex: 1, background: '#F5F5F5', borderRadius: 12, padding: '12px 8px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
          border: '1.5px dashed #DDD', cursor: 'pointer',
        }}>
          <div style={{ fontSize: 20, color: '#CCC' }}>＋</div>
          <div style={{ fontSize: 10, color: '#CCC', fontWeight: 700, textAlign: 'center' }}>브랜드<br />입점 문의</div>
        </div>
      </div>
    </div>
  )
}
