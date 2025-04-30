import React from 'react'
import './Leafspace.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photoleaf from '../3.7m-LEAFSPACE/leafspace1.jpeg'
import Photoleaf2 from '../3.7m-LEAFSPACE/leafspace2.jpeg'
import Photoleaf3 from '../3.7m-LEAFSPACE/leafspace3.jpeg'
import Photoleaf4 from '../3.7m-LEAFSPACE/leafspace4.jpeg'
import Photoleaf5 from '../3.7m-LEAFSPACE/leafspace5.jpeg'
import Photoleaf6 from '../3.7m-LEAFSPACE/leafspace6.jpeg'
import Photoleaf7 from '../3.7m-LEAFSPACE/leafspace7.jpeg'
const Leafspace = () => {
  return (
    <div id='leafspace'>
       <div className="leafspacetop">
     <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>3.7 metrlik LeafSpace</h4>
        <div className="col-xl-3">
        <img src={Photoleaf} alt="" />
        </div>
        <div className="col-xl-3">
        <img src={Photoleaf2} alt="" />
        </div>
        <div className="col-xl-3">
        <img src={Photoleaf3} alt="" />
        </div>
        <div className="col-xl-3">
        <img src={Photoleaf4} alt="" />
        </div>
        <div className="col-xl-3">
        <img src={Photoleaf5} alt="" />
        </div>
        <div className="col-xl-3">
        <img src={Photoleaf6} alt="" />
        </div>
        <div className="col-xl-3">
        <img src={Photoleaf7} alt="" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Leafspace
