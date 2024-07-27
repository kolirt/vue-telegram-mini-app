export { getItem } from './getItem'
export { getItems } from './getItems'
export { getKeys } from './getKeys'
export { removeItem } from './removeItem'
export { removeItems } from './removeItems'
export { setItem } from './setItem'
import { isVersionAtLeast } from '../isVersionAtLeast'

export function isHapticFeedbackSupported(): boolean {
  return isVersionAtLeast('6.9')
}
