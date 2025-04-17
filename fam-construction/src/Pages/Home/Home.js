import React from 'react'
import App from '../../App'
import Hometop from '../../Components/HomeTop/Hometop'
import Homehaqqimizda from '../../Components/HomeHaqqimizda/Homehaqqimizda'
import styled from '../Home/Home.scss'
import Homexidmet from '../../Components/HomeXidmetler/Homexidmet'
import Homelayiheler from '../../Components/HomeLayiheler/Homelayiheler'
const Home = () => {
  return (
    <div>
      <Hometop/>
      <Homehaqqimizda/>
      <Homexidmet/>
      <Homelayiheler/>
    </div>
  )
}

export default Home
