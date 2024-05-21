import { webApp } from '../../webApp'

export function notificationOccurred(style: 'error' | 'success' | 'warning' = 'success') {
  webApp.HapticFeedback.notificationOccurred(style)
}
