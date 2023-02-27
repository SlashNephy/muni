import { AppShell, Modal, Stack } from '@mantine/core'
import React from 'react'

import { GradientBackground } from '../GradientBackground'

import type { ModalProps } from '@mantine/core'

export function AppLayout({
  children,
  ...props
}: React.PropsWithChildren<
  Omit<
    ModalProps,
    | 'opened'
    | 'onClose'
    | 'withCloseButton'
    | 'closeOnEscape'
    | 'closeOnClickOutside'
  >
>): React.ReactElement {
  return (
    <AppShell>
      <GradientBackground />

      <Modal
        centered
        opened
        closeOnClickOutside={false}
        closeOnEscape={false}
        radius="lg"
        size="lg"
        withCloseButton={false}
        onClose={() => false}
        {...props}
      >
        <Stack>{children}</Stack>
      </Modal>
    </AppShell>
  )
}
