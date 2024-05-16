import { updateState } from '../../state'
import { webApp } from '../../webApp'

export function show() {
  webApp.BackButton.show()
  updateState()
}

export function hide() {
  webApp.BackButton.hide()
  updateState()
}
