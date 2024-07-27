import { updateState } from '../../state'
import { webApp } from '../../webApp'
import { isVersionAtLeast } from '../isVersionAtLeast'

export function isSupported(): boolean {
  return isVersionAtLeast('6.1')
}

export function set(color: string) {
  webApp.setBackgroundColor(color)
  updateState()
}
