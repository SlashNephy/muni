import { DecoratorFunction } from '@storybook/types'
import { ReactRenderer } from '@storybook/react'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n } from './../../src/locales/i18n'

export const withI18next: DecoratorFunction<ReactRenderer, unknown> = (
  StoryFun,
  context
) => {
  const { locale } = context.globals
  useEffect(() => {
    i18n.changeLanguage(locale).catch(console.error)
  }, [locale])

  return <I18nextProvider i18n={i18n}>{StoryFun()}</I18nextProvider>
}
