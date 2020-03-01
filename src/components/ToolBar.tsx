import React from 'react'
import { Flex, Select } from '@chakra-ui/core'
import { City } from './Main'

interface IToolbar {
  currentCity: City
  toggleCity(city: City): void
}

const Toolbar = ({ currentCity, toggleCity }: IToolbar) => {
  const onCityChange = (data: any) => {
    toggleCity(data.target.value)
  }

  return (
    <Flex px="4" h="4rem" w="100vw" align="center" justify="center" marginY="10px">
      <Select variant="flushed" maxW="500px" value={currentCity} onChange={onCityChange}>
        <option value={City.Atlanta}>{City.Atlanta}</option>
        <option value={City.Sunnyvale}>{City.Sunnyvale}</option>
        <option value={City.Mumbai}>{City.Mumbai}</option>
        <option value={City.NewYork}>{City.NewYork}</option>
        <option value={City.Columbia}>{City.Columbia}</option>
      </Select>
    </Flex>
  )
}

export default Toolbar
