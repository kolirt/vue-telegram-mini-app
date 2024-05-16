import { updateState } from '../state'
import { webApp } from '../webApp'

export function enableClosingConfirmation() {
  webApp.enableClosingConfirmation()
  updateState()
}

export function disableClosingConfirmation() {
  webApp.disableClosingConfirmation()
  updateState()
}
