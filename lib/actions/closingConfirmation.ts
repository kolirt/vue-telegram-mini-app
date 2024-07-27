import { updateState } from '../state'
import { webApp } from '../webApp'
import { isVersionAtLeast } from './isVersionAtLeast'

export function isClosingConfirmationSupported(): boolean {
  return isVersionAtLeast('6.2')
}

export function enableClosingConfirmation() {
  webApp.enableClosingConfirmation()
  updateState()
}

export function disableClosingConfirmation() {
  webApp.disableClosingConfirmation()
  updateState()
}
