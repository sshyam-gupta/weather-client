import React, { ReactNode } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { theme, Stack } from '@chakra-ui/core'
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
  },
  fonts: {
    body: 'PT Serif' + theme.fonts.body,
    heading: 'PT Serif' + theme.fonts.heading,
    mono: theme.fonts.mono
  }
}

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Stack bg="teal.100">{children}</Stack>
    </ThemeProvider>
  )
}

export default Root
