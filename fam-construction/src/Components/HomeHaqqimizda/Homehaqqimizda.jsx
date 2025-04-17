import React from 'react'
import styled from '../HomeHaqqimizda/Homehaqqimizda.scss'
const Homehaqqimizda = () => {
  return (
    <div id='homehaqqimizda'>
      <h2>HAQQIMIZDA</h2>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
           <div className="imgleft">
           <img src="https://famgroupconstruction.az/templates/az/images/about.png" alt="" />
           <p>FAM GROUP CONSTRUCTION</p>
           </div>
            </div>
            <div className="col-xl-6">
            <button>ƏTRAFLI MƏLUMAT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homehaqqimizda
