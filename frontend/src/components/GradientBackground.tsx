import { css, keyframes } from '@emotion/react'
import React from 'react'

const gradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  
  50% {
    background-position: 100% 50%;
  }
  
  100% {
    background-position: 0 50%;
  }
`

export const GradientBackground: React.FC = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;

        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: ${gradient} 10s ease infinite;
      `}
    />
  )
}
