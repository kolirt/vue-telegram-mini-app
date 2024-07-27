import { updateState } from '../../state'
import { webApp } from '../../webApp'
import { isVersionAtLeast } from '../isVersionAtLeast'

export function isSupported(): boolean {
  return isVersionAtLeast('7.7')
}

export function enable() {
  webApp.enableVerticalSwipes()
  updateState()
}

export function disable() {
  webApp.disableVerticalSwipes()
  updateState()
}
