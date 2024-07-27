export type State = {
  initData: string
  // initDataUnsafe
  version: string
  platform: string
  colorScheme: string
  // themeParams
  isExpanded: boolean
  viewportHeight: number
  viewportStableHeight: number
  headerColor: string
  backgroundColor: string
  isClosingConfirmationEnabled: boolean
  isVerticalSwipesEnabled: boolean
}

export type Options = {
  alwaysExpand?: boolean
  autoExpandInterval?: number
  closingConfirmation?: boolean
  headerColor?: `#${string}` | 'bg_color' | 'secondary_bg_color'
  backgroundColor?: `#${string}` | 'bg_color' | 'secondary_bg_color'
}
