import { updateState } from '../../state'
import { webApp } from '../../webApp'
import { isVersionAtLeast } from '../isVersionAtLeast'

export function isSupported(): boolean {
  return isVersionAtLeast('6.2')
}

export function enable() {
  webApp.enableClosingConfirmation()
  updateState()
}

export function disable() {
  webApp.disableClosingConfirmation()
  updateState()
}
