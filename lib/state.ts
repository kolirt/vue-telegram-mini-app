import { reactive } from 'vue'

import type { State } from './types'
import { webApp } from './webApp'

export const state = reactive<State>({
  initData: '',
  // initDataUnsafe
  version: '',
  platform: '',
  colorScheme: '',
  // themeParams
  isExpanded: false,
  viewportHeight: 0,
  viewportStableHeight: 0,
  headerColor: '',
  backgroundColor: '',
  isClosingConfirmationEnabled: false,
  isVerticalSwipesEnabled: false
})

export function updateState() {
  state.initData = webApp.initData
  state.version = webApp.version
  state.platform = webApp.platform
  state.colorScheme = webApp.colorScheme
  state.isExpanded = webApp.isExpanded
  state.viewportHeight = webApp.viewportHeight
  state.viewportStableHeight = webApp.viewportStableHeight
  state.headerColor = webApp.headerColor
  state.backgroundColor = webApp.backgroundColor
  state.isClosingConfirmationEnabled = webApp.isClosingConfirmationEnabled
  state.isVerticalSwipesEnabled = webApp.isVerticalSwipesEnabled
}
