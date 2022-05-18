import { useState, useEffect, useRef } from 'react'
import throttle from 'lodash/throttle'

export const useVisibility = (offset = 0, throttleMs = 100, setOnce = true) => {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef(null)

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top
    const inView = top + offset >= 0 && top - offset <= window.innerHeight
    if (setOnce) {
      if (inView) {
        setIsVisible(true)
      }
    } else {
      setIsVisible(inView)
    }
  }, throttleMs);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  });

  return [isVisible, currentElement]
}