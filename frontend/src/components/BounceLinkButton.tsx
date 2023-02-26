import { css } from '@emotion/react'
import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

import type { ButtonProps } from '@mantine/core'

export const BounceLinkButton: React.FC<
  ButtonProps &
    React.ComponentPropsWithoutRef<'button'> & {
      to: string
      label: string
    }
> = ({ to, label, ...props }) => {
  return (
    <div
      css={css`
        display: inline-block;
        & {
          transition: 0.2s ease-in-out 0s;

          &:hover {
            transform: scale(1.1);
          }
        }
      `}
    >
      <Link to={to}>
        <Button {...props}>{label}</Button>
      </Link>
    </div>
  )
}
