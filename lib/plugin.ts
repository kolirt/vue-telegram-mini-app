import type { Plugin } from 'vue'

import { init } from './init'
import { setOptions } from './options'
import type { Options } from './types'

export function createTelegramMiniApp(options: Options = {}): Plugin {
  return {
    install() {
      setOptions(options)
      init()
    }
  }
}
