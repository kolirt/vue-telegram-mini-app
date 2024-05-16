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
}

export type Options = {
  alwaysExpand?: boolean
  autoExpandInterval?: number
  closingConfirmation?: boolean
  headerColor?: `#${string}` | 'bg_color' | 'secondary_bg_color'
  backgroundColor?: `#${string}` | 'bg_color' | 'secondary_bg_color'
}

export enum EventType {
  ThemeChanged = 'themeChanged',
  ViewportChanged = 'viewportChanged',
  MainButtonClicked = 'mainButtonClicked',
  BackButtonClicked = 'backButtonClicked',
  SettingsButtonClicked = 'settingsButtonClicked',
  InvoiceClosed = 'invoiceClosed',
  PopupClosed = 'popupClosed',
  QrTextReceived = 'qrTextReceived',
  ClipboardTextReceived = 'clipboardTextReceived',
  WriteAccessRequested = 'writeAccessRequested',
  ContactRequested = 'contactRequested',
  BiometricManagerUpdated = 'biometricManagerUpdated',
  BiometricAuthRequested = 'biometricAuthRequested',
  BiometricTokenUpdated = 'biometricTokenUpdated'
}
