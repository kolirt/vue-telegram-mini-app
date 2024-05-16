import { EventType } from '../types'
import { webApp } from '../webApp'

export function onEvent(eventType: EventType, eventHandler: (arg?: any) => void) {
  webApp.onEvent(eventType, eventHandler)
}

export function offEvent(eventType: EventType, eventHandler: (arg?: any) => void) {
  webApp.offEvent(eventType, eventHandler)
}
