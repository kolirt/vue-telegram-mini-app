import { reactive } from 'vue'

import { autoExpand, enableClosingConfirmation, setBackgroundColor, setHeaderColor } from './actions'
import type { Options } from './types'

export const state = reactive<Options>({
  autoExpandInterval: 1_000
})

export function setOptions(options: Options) {
  if ('autoExpandInterval' in options) {
    state.autoExpandInterval = options.autoExpandInterval
  }

  if (options.alwaysExpand) {
    autoExpand()
  }

  if (options.closingConfirmation) {
    enableClosingConfirmation()
  }

  if (options.headerColor) {
    setHeaderColor(options.headerColor)
  }

  if (options.backgroundColor) {
    setBackgroundColor(options.backgroundColor)
  }
}
