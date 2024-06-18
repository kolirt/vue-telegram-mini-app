function createDoubleTapPreventer(timeout_ms: number) {
  let dblTapTimer: any = 0
  let dblTapPressed = false

  return function (e: TouchEvent) {
    clearTimeout(dblTapTimer)
    if (dblTapPressed) {
      e.preventDefault()
      dblTapPressed = false
    } else {
      dblTapPressed = true
      dblTapTimer = setTimeout(() => {
        dblTapPressed = false
      }, timeout_ms)
    }
  }
}

export function fixIosMultitaps(timeout_ms: number = 500) {
  document.body.addEventListener('touchstart', createDoubleTapPreventer(timeout_ms), { passive: false })
}

export function unfixIosMultitaps(timeout_ms: number = 500) {
  document.body.removeEventListener('touchstart', createDoubleTapPreventer(timeout_ms))
}
