import { webApp } from '../webApp'

export function isVersionAtLeast(version: string): boolean {
  return webApp.isVersionAtLeast(version)
}
