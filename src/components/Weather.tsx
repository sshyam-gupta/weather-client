import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import { WeatherInfo } from '../interfaces/common'
// @ts-ignore
import WeatherIcon from 'react-icons-weather'
import Observations from './CurrentObservation'
import WeatherForecast from './WeatherForecast'

interface IWeather {
  weather?: WeatherInfo
}

const Weather = ({ weather }: IWeather) => {
  if (!weather) {
    return null
  }

  console.log(weather)
  return (
    <>
      <Flex direction="column" alignItems="center" flexGrow={1} bg="teal.100">
        <Text fontSize="lg" as="em" textAlign="center" width="100%" mt="1em">
          <span>Last Updated: </span>
          <span>{new Date(weather.lastUpdated).toLocaleString()}</span>
        </Text>
        <Flex alignItems="center" mt="1em" textAlign="center" width="100%">
          <Flex
            direction={['column', 'column', 'row', 'row']}
            marginY="2em"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <div>
              <Text fontSize="150px" lineHeight="170px">
                {weather.current_observation.condition.temperature}°
              </Text>
              <Flex alignItems="center" fontSize="50px" textAlign="center">
                <WeatherIcon
                  name="yahoo"
                  iconId={weather.current_observation.condition.code.toString()}
                />
                <Text ml="5px">{weather.current_observation.condition.text}</Text>
              </Flex>
            </div>

            <Observations observation={weather.current_observation} />
          </Flex>
        </Flex>

        <Text fontSize="4xl">
          {weather.location.city}, {weather.location.region}, {weather.location.country}
        </Text>
        <WeatherForecast forecasts={weather.forecasts} />
      </Flex>
    </>
  )
}

export default Weather
