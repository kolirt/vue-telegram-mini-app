import { Events } from '../../enums'
import { webApp } from '../../webApp'

export function onEvent(eventType: Events, eventHandler: (arg?: any) => void) {
  webApp.onEvent(eventType, eventHandler)
}

export function offEvent(eventType: Events, eventHandler: (arg?: any) => void) {
  webApp.offEvent(eventType, eventHandler)
}
