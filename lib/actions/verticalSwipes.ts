import { updateState } from '../state'
import { webApp } from '../webApp'
import { isVersionAtLeast } from './isVersionAtLeast'

export function isVerticalSwipesSupported(): boolean {
  return isVersionAtLeast('7.7')
}

export function enableVerticalSwipes() {
  webApp.enableVerticalSwipes()
  updateState()
}

export function disableVerticalSwipes() {
  webApp.disableVerticalSwipes()
  updateState()
}
