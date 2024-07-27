import * as BackButton from './backButton'
import * as CloudStorage from './cloudStorage'
import * as HapticFeedback from './hapticFeedback'

export { close } from './close'
export {
  disableClosingConfirmation,
  enableClosingConfirmation,
  isClosingConfirmationSupported
} from './closingConfirmation'
export { offEvent, onEvent } from './events'
export { autoExpand, expand, stopAutoExpand } from './expand'
export { isVersionAtLeast } from './isVersionAtLeast'
export { ready } from './ready'
export { isBackgroundColorSupported, setBackgroundColor } from './setBackgroundColor'
export { isHeaderColorSupported, setHeaderColor } from './setHeaderColor'
export { disableVerticalSwipes, enableVerticalSwipes, isVerticalSwipesSupported } from './verticalSwipes'
export { BackButton, CloudStorage, HapticFeedback }
