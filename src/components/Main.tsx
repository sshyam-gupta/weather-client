import React from 'react'
import Toolbar from './ToolBar'
import Weather from './Weather'
import { Action, Store, WeatherInfo } from '../interfaces/common'

export enum City {
  Mumbai = 'Mumbai',
  Sunnyvale = 'Sunnyvale',
  NewYork = 'New York',
  Columbia = 'Columbia',
  Atlanta = 'Atlanta',
}

const INITIAL_STATE = {} as Store

function REDUCER(state: Store, action: Action) {
  switch (action.type) {
    case 'UPDATE_CITY':
      return {
        ...state,
        [action.city]: action.payload
      }
    default:
      throw new Error()
  }
}

const Main = () => {
  const [selectedCity, toggleCity] = React.useState(City.Atlanta)
  const [state, dispatch] = React.useReducer(REDUCER, INITIAL_STATE)

  React.useEffect(() => {
    fetch(`https://weather-server.now.sh/weather?city=${selectedCity}`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'UPDATE_CITY',
          city: selectedCity,
          payload: { ...response, lastUpdated: new Date().getTime() }
        })
      })
  }, [selectedCity])

  // @ts-ignore
  const weatherInfo = state[selectedCity as string] as WeatherInfo

  return (
    <>
      <Toolbar currentCity={selectedCity} toggleCity={toggleCity} />
      <Weather weather={weatherInfo} />
    </>
  )
}

export default Main
