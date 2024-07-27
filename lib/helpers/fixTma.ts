import { enableVerticalSwipes, isVerticalSwipesSupported } from '../actions/verticalSwipes'

const options = { passive: false }
let ts: any
let scrollableEl: HTMLElement | null

function onTouchStart(e: TouchEvent) {
  ts = e.touches[0].clientY
}

function onTouchMove(e: TouchEvent) {
  if (scrollableEl) {
    const scroll = scrollableEl.scrollTop
    const te = e.changedTouches[0].clientY
    if (scroll <= 0 && ts < te) {
      e.preventDefault()
    }
  } else {
    e.preventDefault()
  }
}

function onScroll() {
  // @ts-ignore
  if (window.scrollY !== window.overflowPadding) {
    // @ts-ignore
    window.scrollTo(0, window.overflowPadding)
  }
}

export function fixTma(el: HTMLElement | null) {
  if (isVerticalSwipesSupported()) {
    enableVerticalSwipes()
  } else {
    scrollableEl = el

    // @ts-ignore
    window.overflowPadding = 100
    // @ts-ignore
    document.body.style.height = window.innerHeight + window.overflowPadding + 'px'
    // @ts-ignore
    window.scrollTo(0, window.overflowPadding)

    window.addEventListener('scroll', onScroll)
    document.documentElement.addEventListener('touchstart', onTouchStart, options)
    document.documentElement.addEventListener('touchmove', onTouchMove, options)
  }
}

export function unfixTma() {
  if (!isVerticalSwipesSupported()) {
    window.removeEventListener('scroll', onScroll)
    document.documentElement.removeEventListener('touchstart', onTouchStart)
    document.documentElement.removeEventListener('touchmove', onTouchMove)
  }
}
