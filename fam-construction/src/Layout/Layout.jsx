import React from 'react'
import App from '../App'
import Navbar from "./Navbar/Navbar"
import Footer from './Footer/Footer'
const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout