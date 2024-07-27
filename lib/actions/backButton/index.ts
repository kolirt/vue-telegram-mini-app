export { offClick, onClick } from './events'
export { hide, show } from './visible'
import { isVersionAtLeast } from '../isVersionAtLeast'

export function isBackButtonSupported(): boolean {
  return isVersionAtLeast('6.1')
}
