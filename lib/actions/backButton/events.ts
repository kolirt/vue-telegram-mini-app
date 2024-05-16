import { webApp } from '../../webApp'

export function onClick(callback: () => void) {
  webApp.BackButton.onClick(callback)
}

export function offClick(callback: () => void) {
  webApp.BackButton.offClick(callback)
}
