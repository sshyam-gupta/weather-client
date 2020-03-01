import React from 'react'
import { ForeCast } from '../interfaces/common'
import { Flex, Text, Box } from '@chakra-ui/core'
// @ts-ignore
import WeatherIcon from 'react-icons-weather'

interface IWeatherForecast {
  forecasts: ForeCast[]
}

function WeatherForecast({ forecasts }: IWeatherForecast) {
  if (forecasts.length < 0) {
    return null
  }
  return (
    <>
      <Text fontSize="2xl">Forecast</Text>
      <Flex overflow="scroll" maxW="90%">
        {forecasts.map((forecast: ForeCast, index: number) => (
          <Box
            key={index}
            p="1em"
            m="1em"
            borderWidth="1px"
            borderColor="cyan.700"
            borderRadius="5px"
          >
            <Flex direction="column" textAlign="center">
              <Text fontSize="md">{forecast.day}</Text>
              <Flex alignItems="center" marginY="5px">
                <WeatherIcon name="yahoo" iconId={forecast.code.toString()} />
                <Text ml="5px">{forecast.text}</Text>
              </Flex>
              <Text fontSize="md">High: {forecast.high}°</Text>
              <Text fontSize="md">Low: {forecast.low}°</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default WeatherForecast
