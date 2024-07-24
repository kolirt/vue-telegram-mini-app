import { webApp } from '../../webApp'

export function getKeys() {
  return new Promise<string[]>((resolve, reject) => {
    webApp.CloudStorage.getKeys(function (error: any, value: string[]) {
      if (error) {
        reject(error)
      }

      resolve(value)
    })
  })
}
