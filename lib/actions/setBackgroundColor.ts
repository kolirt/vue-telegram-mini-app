import { updateState } from '../state'
import { webApp } from '../webApp'
import { isVersionAtLeast } from './isVersionAtLeast'

export function isBackgroundColorSupported(): boolean {
  return isVersionAtLeast('6.1')
}

export function setBackgroundColor(color: string) {
  webApp.setBackgroundColor(color)
  updateState()
}
