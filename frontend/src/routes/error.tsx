import { Center, Code, Modal, Space, Stack, Text, Title } from '@mantine/core'
import { IconFileAlert } from '@tabler/icons-react'
import React from 'react'
import { useRouteError } from 'react-router-dom'

import { GradientBackground } from '../components/GradientBackground'

export function ErrorReport(): React.ReactElement {
  const error = useRouteError()

  return (
    <>
      <GradientBackground />

      <Modal
        centered
        opened
        closeOnClickOutside={false}
        closeOnEscape={false}
        radius="lg"
        size="xl"
        withCloseButton={false}
        onClose={() => false}
      >
        <Stack>
          <Title align="center">
            <IconFileAlert />
            エラーが発生しました
          </Title>

          <Space />

          <Center>
            <Stack>
              <Text>
                バグレポートを行う場合は、開発者に以下の情報を送信してください。
              </Text>
              <Code block color="red">
                {error?.toString()}
                {error !== null &&
                  error !== undefined &&
                  (error as Error).stack}
              </Code>
            </Stack>
          </Center>
        </Stack>
      </Modal>
    </>
  )
}
