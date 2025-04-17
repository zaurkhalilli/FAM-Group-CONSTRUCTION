import React from 'react'
import styled from '../HomeXidmetler/Homexidmet.scss'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Homexidmet = () => {
  return (
    <div id='xidmetler'>
      <h3>XİDMƏTLƏRİMİZ</h3>
      <div className="container">
        <div className="row">
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="https://famgroupconstruction.az/uploads/posts/2021-07/medium/1626982616_services1.png" alt="" /></Link>
            </div>
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="	https://famgroupconstruction.az/uploads/posts/2021-07/medium/1626982728_services2.png" alt="" /></Link>
            </div>
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="	https://famgroupconstruction.az/uploads/posts/2021-07/medium/1626982813_services3.png" alt="" /></Link>
            </div>
            <div className="col-xl-3">
            <Link to="/xidmetler"><img src="https://famgroupconstruction.az/uploads/posts/2021-07/medium/1626982893_services4.png" alt="" /></Link>
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
