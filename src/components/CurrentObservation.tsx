import React from 'react'
import { CurrentObservation } from '../interfaces/common'
import { Flex, Text } from '@chakra-ui/core'

interface CurrentObservationProps {
  observation: CurrentObservation
}

enum Rising {
  'Steady',
  'Rising',
  'Falling'
}

function Observations({ observation }: CurrentObservationProps) {
  return (
    <Flex
      alignItems="start"
      ml={['0', '0', '2em', '3em']}
      mt={['1em', '1em', '0', '0']}
      direction="column"
    >
      <Text fontSize="xl">Humidity: {observation.atmosphere.humidity}%</Text>
      <Text fontSize="xl">Visibility: {observation.atmosphere.visibility}km</Text>
      <Text fontSize="xl">Pressure: {observation.atmosphere.pressure}mbar</Text>
      <Text fontSize="xl">Rising: {Rising[observation.atmosphere.rising]}</Text>
      <br />
      <Text fontSize="xl">Sunrise: {observation.astronomy.sunrise}</Text>
      <Text fontSize="xl">Sunset: {observation.astronomy.sunset}</Text>
      <br />
      <Text fontSize="xl">Direction: {observation.wind.direction}°</Text>
      <Text fontSize="xl">Speed: {observation.wind.speed}km/h</Text>
      <Text fontSize="xl">Chill: {observation.wind.chill}°</Text>
    </Flex>
  )
}

export default Observations
