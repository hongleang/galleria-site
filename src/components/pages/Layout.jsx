import React from 'react'
import Navbar from "../commons/Navbar"
import { Outlet } from "react-router-dom"
import { GlobalStyle } from "../commons/GlobalStyles/GlobalStyles"
import { AppContextProvider } from "../../context/appContext"

const Layout = ({ slideShowStart, toggleSlideShow }) => {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <Navbar slideShowStart={slideShowStart} toggleSlideShow={toggleSlideShow} />
      <Outlet />
    </AppContextProvider>
  )
}

export default Layout