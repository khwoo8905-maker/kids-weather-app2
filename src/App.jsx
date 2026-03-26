import { useState, useEffect } from "react";

// ── 세분화된 옷차림 데이터 ──────────────────────────────────────
function getOutfitAdvice(temp) {
  if (temp >= 28) return {
    range: "28°C 이상", label: "무더운 날", icon: "☀️",
    color: "#FF4500", bg: "#FFF3EE", tagBg: "#FFE8E0",
    items: [
      { category: "상의",    icon: "👕", text: "민소매 / 반팔 티셔츠" },
      { category: "하의",    icon: "🩳", text: "반바지 / 얇은 면 팬츠" },
      { category: "신발",    icon: "👟", text: "통기성 좋은 운동화·샌들" },
      { category: "액세서리",icon: "🧢", text: "모자 필수 · 선크림 챙기기" },
    ],
    tip: "아이스팩·물통 꼭 챙겨주세요!",
  };
  if (temp >= 23) return {
    range: "23~27°C", label: "따뜻한 날", icon: "🌤️",
    color: "#FF9500", bg: "#FFF8EE", tagBg: "#FFF0D6",
    items: [
      { category: "상의",    icon: "👕", text: "반팔 티셔츠 / 얇은 긴팔" },
      { category: "하의",    icon: "👖", text: "면 팬츠 / 얇은 청바지" },
      { category: "신발",    icon: "👟", text: "가벼운 운동화" },
      { category: "액세서리",icon: "🧴", text: "선크림 발라주세요" },
    ],
    tip: "얇은 카디건 하나 가방에!",
  };
  if (temp >= 18) return {
    range: "18~22°C", label: "선선한 날", icon: "🌥️",
    color: "#34C759", bg: "#EEFFF3", tagBg: "#D6F5E3",
    items: [
      { category: "상의",    icon: "👕", text: "긴팔 티셔츠 / 맨투맨" },
      { category: "아우터",  icon: "🧥", text: "얇은 가디건 / 셔츠 겉옷" },
      { category: "하의",    icon: "👖", text: "일반 청바지 / 면 팬츠" },
      { category: "신발",    icon: "👟", text: "운동화" },
    ],
    tip: "낮엔 덥고 아침엔 쌀쌀해요",
  };
  if (temp >= 15) return {
    range: "15~17°C", label: "쌀쌀한 날", icon: "⛅",
    color: "#00AEEF", bg: "#EEF8FF", tagBg: "#D6EFFF",
    items: [
      { category: "상의",    icon: "👕", text: "긴팔 티셔츠 + 니트" },
      { category: "아우터",  icon: "🧥", text: "가벼운 바람막이 / 얇은 자켓" },
      { category: "하의",    icon: "👖", text: "두꺼운 면 팬츠 / 청바지" },
      { category: "신발",    icon: "👟", text: "운동화 / 가벼운 부츠" },
    ],
    tip: "체감온도가 낮을 수 있어요",
  };
  if (temp >= 12) return {
    range: "12~14°C", label: "제법 추운 날", icon: "🌬️",
    color: "#007AFF", bg: "#EEF4FF", tagBg: "#D6E8FF",
    items: [
      { category: "상의",    icon: "🧶", text: "두꺼운 니트 / 후드티" },
      { category: "아우터",  icon: "🧥", text: "트렌치코트 / 봄·가을 점퍼" },
      { category: "하의",    icon: "👖", text: "두꺼운 청바지 / 기모 팬츠" },
      { category: "액세서리",icon: "🧣", text: "목도리 챙기면 좋아요" },
    ],
    tip: "내복 입혀도 좋은 날씨예요",
  };
  if (temp >= 8) return {
    range: "8~11°C", label: "꽤 추운 날", icon: "🥶",
    color: "#5856D6", bg: "#F2F0FF", tagBg: "#E0DEFF",
    items: [
      { category: "상의",    icon: "🧶", text: "기모 후드티 / 두꺼운 니트" },
      { category: "아우터",  icon: "🧥", text: "두꺼운 점퍼 / 가벼운 패딩" },
      { category: "하의",    icon: "👖", text: "기모 청바지 / 내복 + 팬츠" },
      { category: "액세서리",icon: "🧤", text: "장갑 · 목도리 추천" },
    ],
    tip: "내복 꼭 입혀주세요!",
  };
  if (temp >= 5) return {
    range: "5~7°C", label: "많이 추운 날", icon: "❄️",
    color: "#AF52DE", bg: "#F9EEFF", tagBg: "#EDD6FF",
    items: [
      { category: "내복",    icon: "🩱", text: "내복 (상하의) 필수!" },
      { category: "아우터",  icon: "🧥", text: "두꺼운 패딩 / 롱 코트" },
      { category: "하의",    icon: "👖", text: "기모 레깅스 + 팬츠" },
      { category: "액세서리",icon: "🧤", text: "장갑 · 목도리 · 모자 필수" },
    ],
    tip: "모자·장갑 꼭 챙겨주세요!",
  };
  return {
    range: "5°C 이하", label: "매우 추운 날", icon: "🥶",
    color: "#8B0000", bg: "#FFF0F0", tagBg: "#FFD6D6",
    items: [
      { category: "내복",    icon: "🩱", text: "내복 (상하의) 필수!" },
      { category: "아우터",  icon: "🧥", text: "극세사 패딩 / 헤비다운" },
      { category: "하의",    icon: "👖", text: "기모 내복 + 기모 팬츠" },
      { category: "액세서리",icon: "🧤", text: "귀마개 · 장갑 · 목도리 필수" },
    ],
    tip: "등원 전 충분히 워밍업!",
  };
}

function getRainAdvice(rainChance) {
  if (rainChance >= 70) return { label: "우산 필수!", sublabel:"꼭 챙겨주세요", icon: "☂️", color: "#007AFF", bg:"#EEF4FF", urgent: true };
  if (rainChance >= 40) return { label: "우산 권장", sublabel:"여유 있으면 챙기세요", icon: "🌂", color: "#5AC8FA", bg:"#F0F8FF", urgent: false };
  return { label: "우산 불필요", sublabel:"맑은 날이에요", icon: "☀️", color: "#34C759", bg:"#F0FFF5", urgent: false };
}

function getDustGrade(pm10, pm25) {
  const g10 = pm10 <= 30 ? 0 : pm10 <= 50 ? 1 : pm10 <= 80 ? 2 : pm10 <= 150 ? 3 : 4;
  const g25 = pm25 <= 15 ? 0 : pm25 <= 25 ? 1 : pm25 <= 50 ? 2 : pm25 <= 75 ? 3 : 4;
  const grade = Math.max(g10, g25);
  const grades = [
    { label:"좋음",     color:"#34C759", bg:"#EDFFF3", mask:false, maskLabel:"마스크 불필요", maskSub:"쾌적한 공기예요", maskIcon:"😊", emoji:"🟢" },
    { label:"보통",     color:"#B8A000", bg:"#FFFDE8", mask:false, maskLabel:"마스크 불필요", maskSub:"큰 문제 없어요",  maskIcon:"🙂", emoji:"🟡" },
    { label:"나쁨",     color:"#FF9500", bg:"#FFF5E8", mask:true,  maskLabel:"마스크 권장",   maskSub:"KF80 이상 추천", maskIcon:"😷", emoji:"🟠" },
    { label:"매우나쁨", color:"#FF3B30", bg:"#FFF0EF", mask:true,  maskLabel:"마스크 필수!",  maskSub:"KF94 꼭 챙기세요",maskIcon:"🚨",emoji:"🔴" },
    { label:"위험",     color:"#8B0000", bg:"#FFF0EF", mask:true,  maskLabel:"마스크 필수!",  maskSub:"외출 자제 권장", maskIcon:"⛔", emoji:"⚫" },
  ];
  return { ...grades[grade], grade, pm10, pm25 };
}

function getWeatherEmoji(condition) {
  const c = condition?.toLowerCase() || "";
  if (c.includes("thunderstorm")) return "⛈️";
  if (c.includes("drizzle"))      return "🌦️";
  if (c.includes("rain"))         return "🌧️";
  if (c.includes("snow"))         return "❄️";
  if (c.includes("mist") || c.includes("fog")) return "🌫️";
  if (c.includes("cloud"))        return "☁️";
  if (c.includes("clear"))        return "☀️";
  return "🌤️";
}

function DustBar({ value, max, color }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ background:"#EBEBEB", borderRadius:99, height:7, overflow:"hidden", marginTop:5 }}>
      <div style={{ width:`${pct}%`, height:"100%", background:color, borderRadius:99, transition:"width 1s ease" }} />
    </div>
  );
}

function HourlyCard({ hour, temp, icon, rain }) {
  const outfit = getOutfitAdvice(temp);
  return (
    <div style={{ background:outfit.bg, borderRadius:16, padding:"13px 11px", textAlign:"center", minWidth:68, flex:"0 0 auto", border:`2px solid ${outfit.color}22` }}>
      <div style={{ fontSize:10, color:"#999", fontWeight:700, marginBottom:3 }}>{hour}시</div>
      <div style={{ fontSize:22 }}>{icon}</div>
      <div style={{ fontSize:14, fontWeight:800, color:outfit.color, margin:"3px 0" }}>{temp}°</div>
      <div style={{ fontSize:13 }}>{outfit.icon}</div>
      {rain > 0 && <div style={{ fontSize:9, color:"#007AFF", marginTop:2 }}>💧{rain}%</div>}
    </div>
  );
}

// ── 브랜드 콜라보 슬롯 컴포넌트 ──────────────────────────────────
function BrandCollab({ outfitColor }) {
  // 실제 출시 시 파트너 브랜드 데이터로 교체
  const brands = [
    { name: "브랜드 A", logo: "🏷️", tag: "파트너", color: outfitColor },
    { name: "브랜드 B", logo: "🏷️", tag: "파트너", color: outfitColor },
  ];
  return (
    <div style={{ marginTop:14, borderTop:"1px dashed #E0E0E0", paddingTop:12 }}>
      <div style={{ fontSize:10, color:"#bbb", fontWeight:700, marginBottom:8, display:"flex", alignItems:"center", gap:4 }}>
        <span>🤝</span> 추천 브랜드
        <span style={{ marginLeft:"auto", fontSize:9, color:"#ddd" }}>광고</span>
      </div>
      <div style={{ display:"flex", gap:8 }}>
        {brands.map((b, i) => (
          <div key={i} style={{
            flex:1, background:"#FAFAFA", borderRadius:12, padding:"10px 8px",
            display:"flex", flexDirection:"column", alignItems:"center", gap:4,
            border:`1.5px dashed #E8E8E8`, cursor:"pointer",
          }}>
            <div style={{ fontSize:24 }}>{b.logo}</div>
            <div style={{ fontSize:11, fontWeight:700, color:"#777" }}>{b.name}</div>
            <div style={{
              fontSize:9, background:b.color + "22", color:b.color,
              borderRadius:6, padding:"2px 6px", fontWeight:700,
            }}>{b.tag}</div>
          </div>
        ))}
        <div style={{
          flex:1, background:"#F5F5F5", borderRadius:12, padding:"10px 8px",
          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4,
          border:"1.5px dashed #DDD", cursor:"pointer",
        }}>
          <div style={{ fontSize:20, color:"#CCC" }}>＋</div>
          <div style={{ fontSize:10, color:"#CCC", fontWeight:700, textAlign:"center" }}>브랜드<br/>입점 문의</div>
        </div>
      </div>
    </div>
  );
}

export default function KidsWeatherApp() {
  const [weather, setWeather]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [time, setTime]         = useState(new Date());
  const [coords, setCoords]     = useState({ lat: 37.5665, lon: 126.9780 }); // 기본값 서울

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchAll(pos.coords.latitude, pos.coords.longitude),
        handleGeoError
      );
    } else {
      // 서울 기본 좌표로 API 호출
      fetchAll(37.5665, 126.9780);
    }
  }, []);

  function getFallbackWeather() {
    // 위치 권한 거부 시 서울 기본값
    return {
      city:"서울", temp:9, feels:8, min:4, max:15, humidity:60,
      condition:"맑음", conditionEn:"Clear", rainChance:10, wind:5, pm10:45, pm25:25,
      hourly:[
        {hour:7,temp:7,icon:"🌤️",rain:5},{hour:8,temp:9,icon:"🌤️",rain:10},
        {hour:9,temp:11,icon:"☀️",rain:5},{hour:10,temp:13,icon:"☀️",rain:0},
        {hour:11,temp:15,icon:"☀️",rain:0},
      ],
    };
  }

  function handleGeoError() {
    // GPS 거부 시 서울 좌표로 API 호출
    fetchAll(37.5665, 126.9780);
  }

  async function fetchAll(lat, lon) {
    setCoords({ lat, lon });
    setLoading(true);
    try {
      const KEY = "***OPENWEATHER_KEY_REMOVED***";
      const [curRes, fcRes, airRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric&lang=kr`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric&lang=kr`),
        fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${KEY}`),
      ]);
      const cur = await curRes.json();
      const fc  = await fcRes.json();
      const air = await airRes.json();
      const todayItems = fc.list.filter(i => new Date(i.dt*1000).getDate() === new Date().getDate()).slice(0,5);
      const maxRain = Math.round(Math.max(...todayItems.map(i=>(i.pop||0)*100), 0));
      // 오늘 forecast에서 낮 최고기온 계산
      const todayAllItems = fc.list.filter(i => new Date(i.dt*1000).getDate() === new Date().getDate());
      const forecastMax = todayAllItems.length > 0
        ? Math.round(Math.max(...todayAllItems.map(i => i.main.temp_max)))
        : Math.round(cur.main.temp_max);
      const forecastMin = todayAllItems.length > 0
        ? Math.round(Math.min(...todayAllItems.map(i => i.main.temp_min)))
        : Math.round(cur.main.temp_min);
      const comp = air.list?.[0]?.components || {};
      setWeather({
        city: cur.name || "서울", temp:Math.round(cur.main.temp), feels:Math.round(cur.main.feels_like),
        min: forecastMin, max: forecastMax,
        humidity:cur.main.humidity, condition:cur.weather[0].description,
        conditionEn:cur.weather[0].main, rainChance:maxRain,
        wind:Math.round(cur.wind.speed*3.6),
        pm10:Math.round(comp.pm10??45), pm25:Math.round(comp.pm2_5??22),
        hourly:todayItems.map(i=>({
          hour:new Date(i.dt*1000).getHours(), temp:Math.round(i.main.temp),
          icon:getWeatherEmoji(i.weather[0].main), rain:Math.round((i.pop||0)*100),
        })),
      });
    } catch {
      setWeather(getFallbackWeather());
    } finally { setLoading(false); }
  }

  const timeStr = time.toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"});
  const dateStr = time.toLocaleDateString("ko-KR",{month:"long",day:"numeric",weekday:"short"});

  if (loading) return (
    <div style={{ minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(160deg,#FFF8F0,#EEF6FF)",fontFamily:"'Noto Sans KR',sans-serif" }}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:52,display:"inline-block",animation:"spin 2s linear infinite"}}>🌤️</div>
        <div style={{marginTop:12,color:"#FF9500",fontWeight:700,fontSize:15}}>날씨 불러오는 중...</div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </div>
  );

  // 현재기온과 낮 최고기온 중 높은 값으로 옷차림 추천 (아침에 추워도 낮에 더워질 수 있으므로)
  const outfitTemp = Math.max(weather.temp, weather.max);
  const outfit  = getOutfitAdvice(outfitTemp);
  const rainAdv = getRainAdvice(weather.rainChance);
  const dust    = getDustGrade(weather.pm10, weather.pm25);
  const wEmoji  = getWeatherEmoji(weather.conditionEn);

  const checklist = [
    { ok:true,       text:`${outfit.icon} ${outfit.label} — ${outfit.items[0].text}` },
    { ok:!rainAdv.urgent && rainAdv.color==="#34C759", text: rainAdv.urgent ? `${rainAdv.icon} 우산 필수! (${weather.rainChance}%)` : rainAdv.color==="#34C759" ? "☀️ 우산 불필요" : `${rainAdv.icon} 우산 챙기기 (${weather.rainChance}%)` },
    { ok:!dust.mask, text: dust.mask ? `${dust.maskIcon} 마스크 필수 (${dust.label})` : `${dust.maskIcon} 마스크 불필요` },
    { ok:weather.wind < 15, text: weather.wind >= 15 ? "💨 바람 강해요 — 모자 조심!" : "💨 바람 적당해요" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#FFF8F0 0%,#FFFBF5 40%,#EEF6FF 100%)", fontFamily:"'Noto Sans KR','Apple SD Gothic Neo',sans-serif", paddingBottom:40, maxWidth:420, margin:"0 auto" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        @keyframes pulse{0%,100%{transform:scale(1);}50%{transform:scale(1.04);}}
        @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        .card{animation:fadeUp 0.45s ease both;}
        .wi{animation:float 3s ease-in-out infinite;}
        .urgent{animation:pulse 1.6s ease-in-out infinite;}
      `}</style>

      {/* ── 헤더 ── */}
      <div style={{ background:"linear-gradient(135deg,#FF9500 0%,#FF6B35 100%)", padding:"28px 24px 28px", borderRadius:"0 0 32px 32px", color:"white", position:"relative", overflow:"hidden" }}>
        <div style={{position:"absolute",top:-20,right:-20,width:120,height:120,background:"rgba(255,255,255,0.1)",borderRadius:"50%"}}/>
        <div style={{position:"absolute",bottom:-30,right:60,width:80,height:80,background:"rgba(255,255,255,0.07)",borderRadius:"50%"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:12,opacity:0.85,fontWeight:600,marginBottom:2}}>📍 {weather.city} · {dateStr}</div>
            <div style={{fontSize:26,fontWeight:900,letterSpacing:-0.5}}>아침 등원 날씨</div>
            <div style={{fontSize:12,opacity:0.75,marginTop:3}}>🕐 {timeStr} 기준</div>
          </div>
          <div className="wi" style={{fontSize:54,lineHeight:1}}>{wEmoji}</div>
        </div>
        <div style={{marginTop:18,display:"flex",alignItems:"baseline",gap:8}}>
          <div style={{fontSize:62,fontWeight:900,lineHeight:1}}>{weather.temp}°</div>
          <div>
            <div style={{fontSize:14,opacity:0.9}}>{weather.condition}</div>
            <div style={{fontSize:12,opacity:0.7,marginTop:2}}>체감 {weather.feels}° · 습도 {weather.humidity}%</div>
          </div>
        </div>
        {/* 공기질 뱃지 */}
        <div style={{marginTop:10,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <div style={{fontSize:12,opacity:0.8}}>최저 {weather.min}° / 최고 {weather.max}° · 바람 {weather.wind}km/h</div>
          <div style={{display:"flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.22)",borderRadius:20,padding:"4px 10px"}}>
            <span style={{fontSize:12}}>🌫️</span>
            <span style={{fontSize:11,fontWeight:800}}>공기질</span>
            <span style={{background: dust.grade===0?"#34C759":dust.grade===1?"#FFD60A":dust.grade===2?"#FF9500":"#FF3B30",color:dust.grade===1?"#7a6000":"white",borderRadius:9,padding:"2px 8px",fontSize:10,fontWeight:900}}>{dust.emoji} {dust.label}</span>
            <span style={{fontSize:10,opacity:0.85}}>PM10 {weather.pm10} · PM2.5 {weather.pm25}</span>
          </div>
        </div>
      </div>

      <div style={{padding:"18px 16px",display:"flex",flexDirection:"column",gap:13}}>

        {/* ── 통합 옷차림 카드 ── */}
        <div className="card" style={{ background:outfit.bg, borderRadius:24, padding:20, border:`2px solid ${outfit.color}33`, animationDelay:"0.08s" }}>

          {/* 제목 + 온도 범위 */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
            <div>
              <div style={{fontSize:11,color:outfit.color,fontWeight:800,marginBottom:2}}>👚 오늘 옷차림 추천</div>
              <div style={{fontSize:20,fontWeight:900,color:outfit.color}}>{outfit.icon} {outfit.label}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{background:outfit.color,color:"white",borderRadius:12,padding:"4px 12px",fontSize:12,fontWeight:800}}>{weather.temp}°C</div>
              <div style={{fontSize:10,color:"#aaa",marginTop:4}}>{outfit.range}</div>
            </div>
          </div>

          {/* 세분화 아이템 태그 */}
          <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:14}}>
            {outfit.items.map((item, i) => (
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,background:outfit.tagBg,borderRadius:12,padding:"9px 12px"}}>
                <span style={{fontSize:18,flexShrink:0}}>{item.icon}</span>
                <div>
                  <span style={{fontSize:10,color:outfit.color,fontWeight:800,marginRight:6}}>{item.category}</span>
                  <span style={{fontSize:13,color:"#333",fontWeight:600}}>{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 팁 */}
          <div style={{background:"white",borderRadius:12,padding:"9px 14px",fontSize:12,color:"#555",fontWeight:600,marginBottom:14,display:"flex",alignItems:"center",gap:6}}>
            <span>💡</span> {outfit.tip}
          </div>

          {/* 마스크 + 우산 인라인 뱃지 */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>

            {/* 마스크 */}
            <div className={dust.grade >= 3 ? "urgent" : ""} style={{
              background:dust.bg, borderRadius:14, padding:"12px 10px",
              border:`2px solid ${dust.color}44`,
              display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:4,
            }}>
              <div style={{fontSize:10,color:dust.color,fontWeight:800}}>😷 마스크</div>
              <div style={{fontSize:28}}>{dust.maskIcon}</div>
              <div style={{fontSize:12,fontWeight:900,color:dust.color,lineHeight:1.3}}>{dust.maskLabel}</div>
              <div style={{background:dust.color,color:dust.grade===1?"#7a6000":"white",borderRadius:8,padding:"2px 8px",fontSize:9,fontWeight:800}}>{dust.emoji} {dust.label}</div>
              <div style={{fontSize:9,color:"#999"}}>{dust.maskSub}</div>
            </div>

            {/* 우산 */}
            <div className={rainAdv.urgent ? "urgent" : ""} style={{
              background:rainAdv.bg, borderRadius:14, padding:"12px 10px",
              border:`2px solid ${rainAdv.color}44`,
              display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:4,
            }}>
              <div style={{fontSize:10,color:rainAdv.color,fontWeight:800}}>☂️ 우산</div>
              <div style={{fontSize:28}}>{rainAdv.icon}</div>
              <div style={{fontSize:12,fontWeight:900,color:rainAdv.color,lineHeight:1.3}}>{rainAdv.label}</div>
              <div style={{background:rainAdv.color,color:"white",borderRadius:8,padding:"2px 8px",fontSize:9,fontWeight:800}}>강수 {weather.rainChance}%</div>
              <div style={{fontSize:9,color:"#999"}}>{rainAdv.sublabel}</div>
            </div>
          </div>

          {/* 브랜드 콜라보 슬롯 */}
          <BrandCollab outfitColor={outfit.color} />
        </div>

        {/* ── 등원 체크리스트 ── */}
        <div className="card" style={{ background:"linear-gradient(135deg,#667EEA18,#764BA218)", borderRadius:24, padding:20, border:"2px solid #667EEA2E", animationDelay:"0.16s" }}>
          <div style={{fontSize:11,color:"#667EEA",fontWeight:800,marginBottom:12}}>✅ 오늘 등원 체크리스트</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {checklist.map((item,i) => (
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,background:"white",borderRadius:12,padding:"10px 14px"}}>
                <div style={{width:22,height:22,borderRadius:"50%",flexShrink:0,background:item.ok?"#34C759":"#FF3B30",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"white",fontWeight:900}}>
                  {item.ok?"✓":"!"}
                </div>
                <div style={{fontSize:13,fontWeight:600,color:"#333"}}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 미세먼지 PM 상세 ── */}
        <div className={`card ${dust.grade>=3?"urgent":""}`} style={{ background:dust.bg, borderRadius:24, padding:20, border:`2px solid ${dust.color}33`, animationDelay:"0.24s" }}>
          <div style={{fontSize:11,color:dust.color,fontWeight:800,marginBottom:12}}>🌫️ 미세먼지 상세</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {[{label:"미세먼지 PM10",val:weather.pm10,max:200,hint:"좋음≤30 · 보통≤50 · 나쁨≤80 · 매우나쁨≤150"},
              {label:"초미세먼지 PM2.5",val:weather.pm25,max:100,hint:"좋음≤15 · 보통≤25 · 나쁨≤50 · 매우나쁨≤75"}
            ].map(d=>(
              <div key={d.label}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12}}>
                  <span style={{fontWeight:700,color:"#555"}}>{d.label}</span>
                  <span style={{fontWeight:800,color:dust.color}}>{d.val} μg/m³</span>
                </div>
                <DustBar value={d.val} max={d.max} color={dust.color}/>
                <div style={{fontSize:10,color:"#bbb",marginTop:2}}>{d.hint}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 환경 정보 ── */}
        <div className="card" style={{ background:"white", borderRadius:24, padding:20, border:"2px solid #F0F0F0", animationDelay:"0.32s" }}>
          <div style={{fontSize:11,color:"#999",fontWeight:800,marginBottom:12}}>🌿 환경 정보</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
            {[{label:"체감온도",value:`${weather.feels}°C`,icon:"🌡️",color:"#FF6B35"},
              {label:"바람",    value:`${weather.wind}km/h`,icon:"💨",color:"#5AC8FA"},
              {label:"습도",    value:`${weather.humidity}%`,icon:"💧",color:"#007AFF"},
            ].map(item=>(
              <div key={item.label} style={{textAlign:"center",background:"#FAFAFA",borderRadius:14,padding:"12px 6px"}}>
                <div style={{fontSize:22}}>{item.icon}</div>
                <div style={{fontSize:14,fontWeight:800,color:item.color,marginTop:4}}>{item.value}</div>
                <div style={{fontSize:10,color:"#999",marginTop:2}}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 시간대별 ── */}
        {weather.hourly?.length > 0 && (
          <div className="card" style={{ background:"white", borderRadius:24, padding:20, border:"2px solid #F0F0F0", animationDelay:"0.40s" }}>
            <div style={{fontSize:11,color:"#999",fontWeight:800,marginBottom:12}}>⏰ 시간대별 날씨</div>
            <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:4}}>
              {weather.hourly.map((h,i)=><HourlyCard key={i} {...h}/>)}
            </div>
          </div>
        )}

        {/* ── 새로고침 ── */}
        <button onClick={() => fetchAll(coords.lat, coords.lon)} style={{ background:"linear-gradient(135deg,#FF9500,#FF6B35)", color:"white", border:"none", borderRadius:20, padding:"14px 0", fontSize:15, fontWeight:800, cursor:"pointer", width:"100%", boxShadow:"0 4px 20px rgba(255,149,0,0.35)" }}>
          🔄 날씨 새로고침
        </button>
        <div style={{textAlign:"center",fontSize:11,color:"#CCC"}}>오늘도 안전한 등원 되세요 🌟</div>
      </div>
    </div>
  );
}