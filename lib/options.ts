import { reactive } from 'vue'

import { BackgroundColor, ClosingConfirmation, Expand, HeaderColor } from './actions'
import type { Options } from './types'

export const state = reactive<Options>({
  autoExpandInterval: 1_000
})

export function setOptions(options: Options) {
  if ('autoExpandInterval' in options) {
    state.autoExpandInterval = options.autoExpandInterval
  }

  if (options.alwaysExpand) {
    Expand.enableAutoExpand()
  }

  if (options.closingConfirmation) {
    ClosingConfirmation.enable()
  }

  if (options.headerColor) {
    HeaderColor.set(options.headerColor)
  }

  if (options.backgroundColor) {
    BackgroundColor.set(options.backgroundColor)
  }
}
