import { webApp } from '../../webApp'

export function removeItems(keys: string[]) {
  return new Promise<void>((resolve, reject) => {
    webApp.CloudStorage.removeItem(keys, function (error: any) {
      if (error) {
        reject(error)
      }

      resolve()
    })
  })
}
