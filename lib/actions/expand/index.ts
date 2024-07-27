import { state } from '../../options'
import { updateState } from '../../state'
import { webApp } from '../../webApp'

let autoExpandHandler: any

export function index() {
  webApp.expand()
  updateState()
}

export function enableAutoExpand() {
  autoExpandHandler = setInterval(() => {
    if (!webApp.isExpanded) {
      index()
    }
  }, state.autoExpandInterval)
}

export function disableAutoExpand() {
  clearInterval(autoExpandHandler)
}
