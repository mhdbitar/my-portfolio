import { useLayoutEffect, useState } from "react"

const useWindowSize = (
  w = typeof window !== "undefined" ? window.innerWidth : 0,
  h = typeof window !== "undefined" ? window.innerHeight : 0
) => {
  const [size, setSize] = useState([w, h])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [w, h])
  return size
}

export default useWindowSize
