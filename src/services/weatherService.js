// OpenWeatherMap API 호출 + 정규화
// UI/판단 로직과 완전 분리

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY

function getWeatherEmoji(condition) {
  const c = (condition || '').toLowerCase()
  if (c.includes('thunderstorm')) return '⛈️'
  if (c.includes('drizzle'))      return '🌦️'
  if (c.includes('rain'))         return '🌧️'
  if (c.includes('snow'))         return '❄️'
  if (c.includes('mist') || c.includes('fog')) return '🌫️'
  if (c.includes('cloud'))        return '☁️'
  if (c.includes('clear'))        return '☀️'
  return '🌤️'
}

export async function fetchWeather(lat, lon) {
  const [curRes, fcRes, airRes] = await Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`),
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`),
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`),
  ])

  const cur = await curRes.json()
  const fc  = await fcRes.json()
  const air = await airRes.json()

  const today = new Date().getDate()
  const todayItems = fc.list.filter(i => new Date(i.dt * 1000).getDate() === today)
  const maxRain = Math.round(Math.max(...todayItems.map(i => (i.pop || 0) * 100), 0))

  const forecastMax = todayItems.length > 0
    ? Math.round(Math.max(...todayItems.map(i => i.main.temp_max)))
    : Math.round(cur.main.temp_max)
  const forecastMin = todayItems.length > 0
    ? Math.round(Math.min(...todayItems.map(i => i.main.temp_min)))
    : Math.round(cur.main.temp_min)

  const comp = air.list?.[0]?.components || {}

  return {
    city: cur.name || '서울',
    temp: Math.round(cur.main.temp),
    feelsLike: Math.round(cur.main.feels_like),
    minTemp: forecastMin,
    maxTemp: forecastMax,
    humidity: cur.main.humidity,
    condition: cur.weather[0].description,
    conditionEn: cur.weather[0].main,
    conditionEmoji: getWeatherEmoji(cur.weather[0].main),
    rainChance: maxRain,
    wind: Math.round(cur.wind.speed * 3.6),
    pm10: Math.round(comp.pm10 ?? 45),
    pm25: Math.round(comp.pm2_5 ?? 22),
    hourly: todayItems.slice(0, 5).map(i => ({
      hour: new Date(i.dt * 1000).getHours(),
      temp: Math.round(i.main.temp),
      icon: getWeatherEmoji(i.weather[0].main),
      rain: Math.round((i.pop || 0) * 100),
    })),
  }
}
