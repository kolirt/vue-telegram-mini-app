import { updateState } from '../state'
import { webApp } from '../webApp'

export function setHeaderColor(color: string) {
  webApp.setHeaderColor(color)
  updateState()
}
