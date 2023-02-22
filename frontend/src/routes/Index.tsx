import { css } from '@emotion/react'
import {
  Anchor,
  AppShell,
  Button,
  Card,
  Center,
  Group,
  Modal,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconBolt, IconBrandGithub, IconConfetti } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

import packageJson from '../../package.json'
import { GradientBackground } from '../components/GradientBackground'

export const Index: React.FC = () => {
  return (
    <AppShell>
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
          <Card>
            <Card.Section>
              <Title align="center">{packageJson.name}</Title>
            </Card.Section>
          </Card>

          <Space />

          <Group spacing="lg" position="center">
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
              <Link to="/audience">
                <Button
                  size="md"
                  leftIcon={<IconConfetti size={24} />}
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                >
                  <Text>観客として参加</Text>
                </Button>
              </Link>
            </div>
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
              <Link to="/booth">
                <Button
                  size="md"
                  leftIcon={<IconBolt size={24} />}
                  variant="gradient"
                  gradient={{ from: 'orange', to: 'red' }}
                >
                  <Text>VJ として参加</Text>
                </Button>
              </Link>
            </div>
          </Group>

          <Center>
            <Text size="sm" color="dimmed" mt="lg">
              {packageJson.name}{' '}
              は現在開発中です。予期しない問題により正しく機能しないことがあります。
              <br />
              {packageJson.name}{' '}
              はユーザー情報を収集することはありませんが、アプリケーションの
              <br />
              改善のためにパフォーマンス情報やエラーログを収集する場合があります。
              <br />
              ソースコードは{' '}
              <Anchor href={packageJson.repository.url} target="_blank">
                <IconBrandGithub
                  size={16}
                  style={{ display: 'inline-block', verticalAlign: 'middle' }}
                />{' '}
                GitHub
              </Anchor>{' '}
              で公開しています。
            </Text>
          </Center>
        </Stack>
      </Modal>
    </AppShell>
  )
}
