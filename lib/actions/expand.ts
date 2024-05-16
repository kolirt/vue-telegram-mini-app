import { state } from '../options'
import { updateState } from '../state'
import { webApp } from '../webApp'

let autoExpandHandler: any

export function expand() {
  webApp.expand()
  updateState()
}

export function autoExpand() {
  autoExpandHandler = setInterval(() => {
    if (!webApp.isExpanded) {
      expand()
    }
  }, state.autoExpandInterval)
}

export function stopAutoExpand() {
  clearInterval(autoExpandHandler)
}
