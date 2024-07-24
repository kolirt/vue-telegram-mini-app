import { webApp } from '../../webApp'

export function getItem(key: string) {
  return new Promise<string>((resolve, reject) => {
    webApp.CloudStorage.getItem(key, function (error: any, value: string) {
      if (error) {
        reject(error)
      }

      resolve(value)
    })
  })
}
