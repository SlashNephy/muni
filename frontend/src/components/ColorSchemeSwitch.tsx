import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import React from 'react'

export function ColorSchemeSwitch(): React.ReactElement {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  return (
    <Group my={30} position="center">
      <Switch
        checked={colorScheme === 'dark'}
        size="lg"
        offLabel={
          <IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />
        }
        onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
        onChange={() => {
          toggleColorScheme()
        }}
      />
    </Group>
  )
}
