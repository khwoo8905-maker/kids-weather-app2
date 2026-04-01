import { useState, useEffect } from 'react'
import { fetchWeather } from '../services/weatherService'
import { evaluateWeather } from '../utils/weatherDecisionEngine'

// 기본 좌표: 서울
const DEFAULT_LAT = 37.5665
const DEFAULT_LON = 126.9780

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [decision, setDecision] = useState(null)
  const [loading, setLoading] = useState(true)
  const [coords, setCoords] = useState({ lat: DEFAULT_LAT, lon: DEFAULT_LON })

  async function load(lat, lon) {
    setLoading(true)
    try {
      const data = await fetchWeather(lat, lon)
      setWeather(data)
      setCoords({ lat, lon })

      const d = evaluateWeather({
        temp: data.temp,
        maxTemp: data.maxTemp,
        rainChance: data.rainChance,
        feelsLike: data.feelsLike,
        pm10: data.pm10,
        pm25: data.pm25,
      })
      setDecision(d)
    } catch {
      // fallback 서울
      try {
        const data = await fetchWeather(DEFAULT_LAT, DEFAULT_LON)
        setWeather(data)
        const d = evaluateWeather({
          temp: data.temp,
          maxTemp: data.maxTemp,
          rainChance: data.rainChance,
          feelsLike: data.feelsLike,
          pm10: data.pm10,
          pm25: data.pm25,
        })
        setDecision(d)
      } catch {
        // 완전 실패
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => load(pos.coords.latitude, pos.coords.longitude),
        () => load(DEFAULT_LAT, DEFAULT_LON)
      )
    } else {
      load(DEFAULT_LAT, DEFAULT_LON)
    }
  }, [])

  function refresh() {
    load(coords.lat, coords.lon)
  }

  return { weather, decision, loading, refresh }
}
