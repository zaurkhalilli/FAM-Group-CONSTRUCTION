import React from 'react'
import '../HomeHaqqimizda/Homehaqqimizda.scss'
import { Link } from 'react-router-dom';
const Homehaqqimizda = () => {
  return (
    <div id='homehaqqimizda'>
      <h2>HAQQIMIZDA</h2>
      <div className="container">
        <div className="row g-2">
            <div className="col-xl-6">
           <div className="imgleft">
           <img src="https://famgroupconstruction.az/templates/az/images/about.png" alt="FAM-Group-Construction-Haqqimizda" />
           <p>FAM GROUP CONSTRUCTION</p>
           </div>
            </div>
            <div className="col-xl-6">
           <div className="homebtn">
            <h5>Ətraflı məlumat almaq üçün aşağıdakı butona klik edin : </h5>
            <br />
           <Link to="/haqqimizda"> <button>Biz Kimik ?</button></Link>
           </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homehaqqimizda
