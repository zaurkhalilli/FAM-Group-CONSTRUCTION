import React from 'react'
import '../NORM-MUHAFIZƏ-KÖŞKÜ/Normmuhafize.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photonmk from '../NORM-MUHAFIZƏ-KÖŞKÜ/norm1.jpeg'
import Photonmk2 from '../NORM-MUHAFIZƏ-KÖŞKÜ/norm2.jpeg'
const Normmuhafize = () => {
  return (
    <div id='normmuhafize'>
       <div className="normtop">
                <img src={ Photonmk } alt="FAM-Construction-NORM" />
                </div>
                <div className="container">
                    <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
                    <hr />
                      <div className="row g-4">
                        <h4>NORM Mühafizə köşkü</h4>
                        <div className="col-xl-3">
                        <img src={ Photonmk} alt="FAM-Construction-NORM"/>
                        </div>
                        <div className="col-xl-3">
                        <img src={ Photonmk2} alt="FAM-Construction-NORM"/>
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default Normmuhafize
