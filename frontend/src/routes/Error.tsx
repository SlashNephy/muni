import { Center, Code, Modal, Space, Stack, Title, Text } from '@mantine/core'
import { IconFileAlert } from '@tabler/icons-react'
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
              <Code color="red" block>
                {error?.toString()}
              </Code>
            </Stack>
          </Center>
        </Stack>
      </Modal>
    </>
  )
}
