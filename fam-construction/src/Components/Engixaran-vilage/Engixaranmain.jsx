import React from 'react'
import '../Engixaran-vilage/Engixaranmain.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photoeng from '../Engixaran-vilage/engixaran1.jpeg'
import Photoeng2 from '../Engixaran-vilage/engixaran2.jpeg'
import Photoeng3 from '../Engixaran-vilage/engixaran3.jpeg'
import Photoeng4 from '../Engixaran-vilage/engixaran4.jpeg'
import Photoeng5 from '../Engixaran-vilage/engixaran5.jpeg'
const Engixaranmain = () => {
  return (
    <div id='engixaran'>
      <div className="engixarantop">
     <img src={Photoeng2} alt="FAM-Construction-Engixaran" />
     </div>
      <div className="container">
          <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
          <hr />
           <div className="row g-4">
             <h4>Engixaran Village </h4>
             <div className="col-xl-3">
             <img src={Photoeng} alt="FAM-Construction-Engixaran"/>
             </div>
             <div className="col-xl-3">
             <img src={Photoeng2} alt="FAM-Construction-Engixaran"/>
             </div>
             <div className="col-xl-3">
             <img src={Photoeng3} alt="FAM-Construction-Engixaran"/>
             </div>
             <div className="col-xl-3">
             <img src={Photoeng4} alt="FAM-Construction-Engixaran"/>
             </div>
             <div className="col-xl-3">
             <img src={Photoeng5} alt="FAM-Construction-Engixaran"/>
             </div>
           </div>
          </div>
    </div>
  )
}

export default Engixaranmain
