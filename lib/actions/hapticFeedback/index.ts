export { impactOccurred } from './impactOccurred'
export { notificationOccurred } from './notificationOccurred'
export { selectionChanged } from './selectionChanged'
import { isVersionAtLeast } from '../isVersionAtLeast'

export function isHapticFeedbackSupported(): boolean {
  return isVersionAtLeast('6.1')
}
