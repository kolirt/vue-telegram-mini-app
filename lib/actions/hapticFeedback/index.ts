import { isVersionAtLeast } from '../isVersionAtLeast'

export { impactOccurred } from './impactOccurred'
export { notificationOccurred } from './notificationOccurred'
export { selectionChanged } from './selectionChanged'

export function isSupported(): boolean {
  return isVersionAtLeast('6.1')
}
