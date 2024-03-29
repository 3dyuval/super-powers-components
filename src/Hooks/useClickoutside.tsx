import React from 'react'

const useClickOutside = (ref, handler) => {
    React.useEffect(
        () => {
            const listener = (event) => {
                if (!ref || ref.current.contains(event.target)) return
                handler(event)
            }
            document.addEventListener('mousedown', listener)
            document.addEventListener('touchstart', listener)

            return () => {
                document.removeEventListener('mousedown', listener)
                document.removeEventListener('touchstart', listener)
            }
        },
        [ref, handler])
}

export { useClickOutside }