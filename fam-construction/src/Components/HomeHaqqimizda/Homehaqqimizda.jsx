import React from 'react'
import '../HomeHaqqimizda/Homehaqqimizda.scss'
import { Link } from 'react-router-dom';
const Homehaqqimizda = () => {
  return (
    <div id='homehaqqimizda'>
      <h2>HAQQIMIZDA</h2>
      <div className="container">
        <div className="row g-1">
            <div className="col-xl-6">
           <div className="imgleft">
           <img src="https://famgroupconstruction.az/templates/az/images/about.png" alt="" />
           <p>FAM GROUP CONSTRUCTION</p>
           </div>
            </div>
            <div className="col-xl-6">
           <div className="homebtn">
           <Link to="/haqqimizda"> <button>ƏTRAFLI MƏLUMAT</button></Link>
           </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homehaqqimizda
