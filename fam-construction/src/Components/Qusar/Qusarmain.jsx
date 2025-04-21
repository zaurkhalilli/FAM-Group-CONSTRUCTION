import React from 'react'
import styled from '../Qusar/Qusar.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
const Qusarmain = () => {
  return (
    <div id='Qusar'>
      <div className="qusartop">
     <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
      <p>Qusar şəhərində inşaa etdiyimiz 50 metrəlik Ötürücü Baza Stansiyası</p>
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Qusar şəhərində inşaa etdiyimiz 50 metrəlik Ötürücü Baza Stansiyası</h4>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654289_s1-2.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654321_s2.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654354_s3.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654383_s4.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654426_s5.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654453_s6.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654528_s7.jpg" alt="" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Qusarmain
