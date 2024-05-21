import { webApp } from '../../webApp'

export function impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') {
  webApp.HapticFeedback.impactOccurred(style)
}
