import { Turnstile } from '@marsidev/react-turnstile'

import { config } from '../lib/config'

export function TurnstileWidget(): React.JSX.Element {
  if (!config.turnstileSiteKey) {
    return <></>
  }

  // https://docs.page/marsidev/react-turnstile/props
  return <Turnstile siteKey={config.turnstileSiteKey} />
}
