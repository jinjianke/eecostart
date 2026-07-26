import { fetchWithTimeout } from './remote'

interface GeocodingResult {
  name?: string
  latitude?: number
  longitude?: number
  country_code?: string
}

interface GeocodingResponse {
  results?: GeocodingResult[]
}

interface ForecastResponse {
  current?: {
    temperature_2m?: number
    weather_code?: number
  }
  current_units?: {
    temperature_2m?: string
  }
}

export interface WeatherSnapshot {
  city: string
  temperature: string
  description: string
}

const DEFAULT_CITY = '北京'

function weatherDescription(code: number | undefined) {
  if (typeof code !== 'number') return '天气变化中'
  if (code === 0) return '晴'
  if (code === 1 || code === 2 || code === 3) return '多云'
  if (code === 45 || code === 48) return '有雾'
  if (code >= 51 && code <= 57) return '毛毛雨'
  if (code >= 61 && code <= 67) return '下雨'
  if (code >= 71 && code <= 77) return '下雪'
  if (code >= 80 && code <= 82) return '阵雨'
  if (code >= 95) return '雷雨'
  return '天气变化中'
}

async function findCity(city: string) {
  const params = new URLSearchParams({
    name: city,
    count: '1',
    language: 'zh',
    format: 'json',
  })
  const response = await fetchWithTimeout(`https://geocoding-api.open-meteo.com/v1/search?${params}`)
  const data = (await response.json()) as GeocodingResponse
  const result = data.results?.[0]

  if (!result || typeof result.latitude !== 'number' || typeof result.longitude !== 'number') {
    throw new Error('City not found')
  }

  return {
    name: result.name || city,
    latitude: result.latitude,
    longitude: result.longitude,
  }
}

export async function getWeather(city = DEFAULT_CITY): Promise<WeatherSnapshot> {
  const location = await findCity(city.trim() || DEFAULT_CITY)
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: 'temperature_2m,weather_code',
    timezone: 'Asia/Shanghai',
  })
  const response = await fetchWithTimeout(`https://api.open-meteo.com/v1/forecast?${params}`)
  const data = (await response.json()) as ForecastResponse
  const temperature = data.current?.temperature_2m
  const unit = data.current_units?.temperature_2m || '°C'

  if (typeof temperature !== 'number') {
    throw new Error('Temperature unavailable')
  }

  return {
    city: location.name,
    temperature: `${Math.round(temperature)}${unit}`,
    description: weatherDescription(data.current?.weather_code),
  }
}

export function getSavedWeatherCity() {
  try {
    return localStorage.getItem('weatherCity')?.trim() || DEFAULT_CITY
  } catch {
    return DEFAULT_CITY
  }
}


