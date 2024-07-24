import { webApp } from '../../webApp'

export function getItems<T extends string[] = string[]>(keys: T) {
  return new Promise<T>((resolve, reject) => {
    webApp.CloudStorage.getItems(keys, function (error: any, value: T) {
      if (error) {
        reject(error)
      }

      resolve(value)
    })
  })
}
