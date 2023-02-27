import { Anchor, Center, Group, Space, Text, Title } from '@mantine/core'
import { IconBolt, IconBrandGithub, IconConfetti } from '@tabler/icons-react'
import React from 'react'

import packageJson from '../../package.json'
import { BounceLinkButton } from '../components/BounceLinkButton'
import { AppLayout } from '../components/layouts/AppLayout'

export function Index(): React.ReactElement {
  return (
    <AppLayout>
      <Title align="center">{packageJson.name}</Title>

      <Space />

      <Group position="center" spacing="lg">
        <BounceLinkButton
          gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          label="観客として参加"
          leftIcon={<IconConfetti size={24} />}
          size="md"
          to="/floors"
          variant="gradient"
        />

        <BounceLinkButton
          gradient={{ from: 'orange', to: 'pink', deg: 120 }}
          label="VJ としてホスト"
          leftIcon={<IconBolt size={24} />}
          size="md"
          to="/floors/new"
          variant="gradient"
        />
      </Group>

      <Center>
        <Text color="dimmed" mt="lg" size="sm">
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
    </AppLayout>
  )
}
