import React from 'react'
import { Link } from 'react-router-dom';
import '../Agdam/Agdam.scss'
import { BsBoxArrowLeft } from "react-icons/bs";
const Agdammain = () => {
  return (
    <div id='Agdam'>
      <div className="agdamtop">
     <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Ağdam rayonu Şıxbabalı kəndində inşaa etdiyimiz 60 metrəlik Ötürücü Baza Stansiyasiyası</h4>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690635551_q1.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690635568_q2.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690635578_q3.jpg" alt="" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Agdammain
