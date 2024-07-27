import { updateState } from '../state'
import { webApp } from '../webApp'
import { isVersionAtLeast } from './isVersionAtLeast'

export function isHeaderColorSupported(): boolean {
  return isVersionAtLeast('6.1')
}

export function setHeaderColor(color: string) {
  webApp.setHeaderColor(color)
  updateState()
}
