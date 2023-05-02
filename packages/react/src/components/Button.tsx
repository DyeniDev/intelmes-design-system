import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$viridian',
        background: '$aliceBlue',

        '&:not(:disabled):hover': {
          background: '$seaGreen200',
        },

        '&:disabled': {
          backgroundColor: '$deepSpaceSparkle300',
        },
      },

      secondary: {
        color: '$deepSpaceSparkle100',
        border: '2px solid $deepSpaceSparkle200',

        '&:not(:disabled):hover': {
          background: '$viridian',
          color: '$aliceBlue',
        },

        '&:disabled': {
          color: '$deepSpaceSparkle300',
          borderColor: '$deepSpaceSparkle100',
        },
      },

      tertiary: {
        color: '$deepSpaceSparkle100',

        '&:not(:disabled):hover': {
          color: '$aliceBlue',
        },

        '&:disabled': {
          color: '$viridian',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
