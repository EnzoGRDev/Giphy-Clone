import {useEffect, useState} from 'react'

export default function useNearScreen ({ distance = '200px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)

  useEffect(() => {
    let observer
    const fromElement = externalRef ? externalRef.current : null
    
    if (!fromElement) return  

    const onChange = (entries, observer) => {
      const el = entries[0]
      
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }  

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })
      
    observer.observe(fromElement)      
    
    return () => observer && observer.disconnect()
  })

  return {isNearScreen}
}
