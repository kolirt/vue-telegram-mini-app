import { webApp } from '../../webApp'

export function setItem(key: string, value: string) {
  return new Promise<void>((resolve, reject) => {
    webApp.CloudStorage.setItem(key, value, function (error: any) {
      if (error) {
        reject(error)
      }

      resolve()
    })
  })
}
