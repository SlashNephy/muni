import { css } from '@emotion/react'
import { AppShell } from '@mantine/core'
import React from 'react'

export function PlayerLayout({
  children,
}: Required<React.PropsWithChildren>): React.ReactElement {
  return (
    <AppShell
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgb(5, 9, 9);
      `}
    >
      {children}
    </AppShell>
  )
}
