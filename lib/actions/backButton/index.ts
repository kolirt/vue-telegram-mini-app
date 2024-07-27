import { isVersionAtLeast } from '../isVersionAtLeast'

export { offClick, onClick } from './events'
export { hide, show } from './visible'

export function isSupported(): boolean {
  return isVersionAtLeast('6.1')
}
