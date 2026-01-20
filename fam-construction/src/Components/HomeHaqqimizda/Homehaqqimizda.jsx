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
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
