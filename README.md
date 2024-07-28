<h1 align="center">Vue 3 telegram mini apps</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Made%20with&message=VueJS&color=limegreen&style=for-the-badge&logo=vue.js" />
</p>

**Table of Contents**

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Setup](#setup)
- [Telegram Mini Apps API implementation status](#telegram-mini-apps-api-implementation-status)
  - [window.Telegram.WebApp](#windowtelegramwebapp)
- [Faq](#faq)
- [License](#license)
- [Other projects](#other-projects)

<a href="https://www.buymeacoffee.com/kolirt" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

# Getting started

## Installation
```bash
npm install --save @kolirt/vue-telegram-mini-app

yarn add @kolirt/vue-telegram-mini-app
```

## Setup
```javascript
import { createApp } from 'vue'
import { createTelegramMiniApp } from '@kolirt/vue-telegram-mini-app'

const app = createApp({ ... })

app.use(createTelegramMiniApp({
  alwaysExpand: true,
  closingConfirmation: true
}))

app.mount('#app')
```


# Telegram Mini Apps API implementation status

## [window.Telegram.WebApp](https://core.telegram.org/bots/webapps#initializing-mini-apps)

- [X] initData
- [ ] initDataUnsafe
- [X] version
- [X] platform
- [X] colorScheme
- [ ] themeParams
- [X] isExpanded
- [X] viewportHeight
- [X] viewportStableHeight
- [X] headerColor
- [X] backgroundColor
- [X] isClosingConfirmationEnabled
- [X] isVerticalSwipesEnabled
- [ ] BackButton
  - [ ] isVisible
  - [X] BackButton.onClick
  - [X] BackButton.offClick
  - [X] BackButton.show
  - [X] BackButton.hide
- [ ] MainButton
- [ ] SettingsButton
- [X] HapticFeedback
  - [X] HapticFeedback.impactOccurred
  - [X] HapticFeedback.notificationOccurred
  - [X] HapticFeedback.selectionChanged
- [X] CloudStorage
  - [X] CloudStorage.setItem
  - [X] CloudStorage.getItem
  - [X] CloudStorage.getItems
  - [X] CloudStorage.removeItem
  - [X] CloudStorage.removeItems
  - [X] CloudStorage.getKeys
- [ ] BiometricManager
- [X] isVersionAtLeast
- [X] setHeaderColor(color)
- [X] setBackgroundColor(color)
- [X] enableClosingConfirmation()
- [X] disableClosingConfirmation()
- [X] enableVerticalSwipes()
- [X] disableVerticalSwipes()
- [X] onEvent(eventType, eventHandler)
- [X] offEvent(eventType, eventHandler)
- [ ] sendData(data)
- [ ] switchInlineQuery(query[, choose_chat_types])
- [ ] openLink(url[, options])
- [ ] openTelegramLink(url)
- [ ] openInvoice(url[, callback])
- [ ] showPopup(params[, callback])
- [ ] showAlert(message[, callback])
- [ ] showConfirm(message[, callback])
- [ ] showScanQrPopup(params[, callback])
- [ ] closeScanQrPopup()
- [ ] readTextFromClipboard([callback])
- [ ] requestWriteAccess([callback])
- [ ] requestContact([callback])
- [X] ready()
- [X] expand()
- [X] close()


# FAQ

Check closed [issues](https://github.com/kolirt/vue-telegram-mini-app/issues) with `FAQ` label to get answers for most asked
questions


# License

[MIT](./LICENSE)


# Other projects

Check out my other projects on my [GitHub profile](https://github.com/kolirt)
