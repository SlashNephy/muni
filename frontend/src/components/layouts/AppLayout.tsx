import { AppShell, Modal, Stack } from '@mantine/core'
import React from 'react'

import { GradientBackground } from '../GradientBackground'

import type { ModalProps } from '@mantine/core'

export const AppLayout: React.FC<
  React.PropsWithChildren<
    Omit<
      ModalProps,
      | 'opened'
      | 'onClose'
      | 'withCloseButton'
      | 'closeOnEscape'
      | 'closeOnClickOutside'
    >
  >
> = ({ children, ...props }) => {
  return (
    <AppShell>
      <GradientBackground />

      <Modal
        opened
        onClose={() => false}
        withCloseButton={false}
        closeOnEscape={false}
        closeOnClickOutside={false}
        centered
        size="lg"
        radius="lg"
        {...props}
      >
        <Stack>{children}</Stack>
      </Modal>
    </AppShell>
  )
}
