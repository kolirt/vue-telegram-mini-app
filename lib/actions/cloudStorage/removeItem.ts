import { webApp } from '../../webApp'

export function removeItem(key: string) {
  return new Promise<void>((resolve, reject) => {
    webApp.CloudStorage.removeItem(key, function (error: any) {
      if (error) {
        reject(error)
      }

      resolve()
    })
  })
}
