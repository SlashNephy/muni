import { useDocumentVisibility } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { useWakeLock } from 'react-screen-wake-lock'

export const useScreenWakeLock = (
  onVisible: () => void,
  onHidden: () => void
): void => {
  const documentState = useDocumentVisibility()
  const { isSupported, request, release } = useWakeLock()
  const [wasRequested, setWasRequested] = useState(false)

  useEffect(() => {
    switch (documentState) {
      case 'visible':
        onVisible()

        if (isSupported && !wasRequested) {
          request('screen').catch(console.error)
          setWasRequested(true)
        }

        return
      case 'hidden':
        onHidden()

        if (isSupported && wasRequested) {
          release().catch(console.error)
          setWasRequested(false)
        }
    }
  }, [documentState, isSupported, release, request])
}
