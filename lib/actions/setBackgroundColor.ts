import { updateState } from '../state'
import { webApp } from '../webApp'

export function setBackgroundColor(color: string) {
  webApp.setBackgroundColor(color)
  updateState()
}
