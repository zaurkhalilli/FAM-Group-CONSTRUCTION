import React from 'react'
import '../Fizuli/Fizulimain.scss'
import { Link } from 'react-router-dom'
import { BsBoxArrowLeft } from "react-icons/bs";
const Fizulimain = () => {
  return (
    <div id='Fizuli'>
      <div className="fizulitop">
     <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
      <p>Fizuli rayonu Zobucuq 4 qəsəbəsindəki 50 metrəlik ötürücü baza stansiyasının inşası</p>
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Fizuli rayonu Zobucuq 4 qəsəbəsindəki 50 metrəlik ötürücü baza stansiyasının inşası</h4>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656674_1.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656693_2.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656727_3.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656787_4.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656816_6.jpg" alt="" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Fizulimain
