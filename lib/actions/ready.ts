import { updateState } from '../state'
import { webApp } from '../webApp'

export function ready() {
  webApp.ready()
  updateState()
}
