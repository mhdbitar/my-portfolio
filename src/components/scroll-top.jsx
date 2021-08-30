import React, { useLayoutEffect, useState } from "react"

import PropTypes from "prop-types"

const Scroll = ({showBelow}) => {
  const [show,setShow]= useState(false);

  const handleScroll = (e) => {
        setShow(window.pageYOffset > showBelow)
  }

  useLayoutEffect(()=>{
    if (showBelow && document.body.scrollHeight > window.pageYOffset) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  })

  const ClickHandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    show && (
      <button onClick={ClickHandle} className="btn btn-backTop">
        &#x21a5;
      </button>
    )
  )
}

Scroll.propTypes = {
  showBelow: PropTypes.number,
}
export default Scroll
