export interface Action {
  type: string
  payload: any
  city: any
}

export interface Store {
  [city: string]: WeatherInfo
}

export interface Location {
  city: string
  region: string
  country: string
  woeid: number
  lat: number
  long: number
  timezone_id: string
}

export interface CurrentObservation {
  wind: {
    chill: number
    direction: number
    speed: number
  }
  atmosphere: {
    humidity: number
    visibility: number
    rising: number
    pressure: number
  }
  astronomy: {
    sunrise: string
    sunset: string
  }
  condition: {
    text: string
    code: number
    temperature: number
  }
  pubDate: number
}

export interface ForeCast {
  day: string
  text: string
  date: number
  low: number
  high: number
  code: number
}

export interface WeatherInfo {
  lastUpdated: number;
  location: Location
  current_observation: CurrentObservation
  forecasts: ForeCast[]
}