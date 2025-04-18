import React from 'react'
import App from '../../App'
import Hometop from '../../Components/HomeTop/Hometop'
import Homehaqqimizda from '../../Components/HomeHaqqimizda/Homehaqqimizda'
import styled from '../Home/Home.scss'
import Homexidmet from '../../Components/HomeXidmetler/Homexidmet'
import Homelayiheler from '../../Components/HomeLayiheler/Homelayiheler'
import Homemap from '../../Components/HomeMap/Homemap'
const Home = () => {
  return (
    <div>
      <Hometop/>
      <Homehaqqimizda/>
      <Homexidmet/>
      <Homelayiheler/>
      <Homemap/>
    </div>
  )
}

export default Home
