import React from 'react'
import '../HomeXidmetler/Homexidmet.scss'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Homexidmet = () => {
  return (
    <div id='xidmetler'>
      <h3>XİDMƏTLƏRİMİZ</h3>
      <div className="container">
        <div className="row g-4">
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAM-Group-Construction-Xidmetler" /></Link>
            </div>
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAM-Group-Construction-Xidmetler" /></Link>
            </div>
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAM-Group-Construction-Xidmetler" /></Link>
            </div>
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAM-Group-Construction-Xidmetler" /></Link>
            </div>
        </div>
      </div>
        <div className="xidmetbtn">
        <button type="button" class="btn btn-outline-warning"> <Link to="/xidmetler">BÜTÜN XİDMƏTLƏR <FaArrowRight size={15} /></Link></button>
        </div>
    </div>
  )
}

export default Homexidmet
