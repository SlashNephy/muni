import { Center, Code, Modal, Space, Stack, Title } from '@mantine/core'
import React from 'react'
import { useRouteError } from 'react-router-dom'

import { GradientBackground } from '../components/GradientBackground'

export const Error: React.FC = () => {
  const error = useRouteError()

  return (
    <>
      <GradientBackground />

      <Modal
        centered
        opened
        onClose={() => false}
        withCloseButton={false}
        closeOnEscape={false}
        closeOnClickOutside={false}
        size="lg"
        radius="lg"
      >
        <Stack>
          <Title align="center">エラーが発生しました</Title>

          <Space />

          <Center>
            <Code color="red" block>
              {error?.toString()}
            </Code>
          </Center>
        </Stack>
      </Modal>
    </>
  )
}
