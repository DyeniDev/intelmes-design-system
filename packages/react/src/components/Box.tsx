import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$aliceBlue',
  border: '1px solid $viridian',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
