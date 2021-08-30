import React, { useState, useEffect } from "react"
import useWindowSize from "../hooks/window-size"
import "../assets/scss/style.scss"
import Footer from "./footer"
import Header from "./header"
import { breakpoint } from "../data/constance"
import Drawer from "./drawer"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  const [drawerOpened, setOpened] = useState(false)
  let [width] = useWindowSize()

  const toggleDrawer = () => setOpened(state => !state);
  useEffect(() => {
    if (width > breakpoint && drawerOpened) {
      toggleDrawer()
    }
  }, [width, drawerOpened])

  return (
    <>
      <Header drawer={toggleDrawer} />
      <main>{children}</main>
      {width < breakpoint ? (
        <Drawer opened={drawerOpened} close={toggleDrawer} />
      ) : null}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
