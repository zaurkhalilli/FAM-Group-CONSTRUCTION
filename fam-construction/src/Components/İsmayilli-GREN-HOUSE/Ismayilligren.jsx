import React from 'react'
import '../İsmayilli-GREN-HOUSE/Ismayilligren.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photoigh from './Greenhouse1.jpeg'
import Photoigh2 from './Greenhouse2.jpeg'
import Photoigh3 from './Greenhouse3.jpeg'
const Ismayilligren = () => {
  return (
    <div id='ismayilligrentop'>
        <div className="ismayillitop">
          <img src={ Photoigh2} alt="FAM-Construction-Ismayilli" />
          </div>
          <div className="container">
              <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
              <hr />
                <div className="row g-4">
                  <h4>Ismayıllı Gren House </h4>
                  <div className="col-xl-3">
                  <img src={ Photoigh} alt="FAM-Construction-Ismayilli"/>
                  </div>
                  <div className="col-xl-3">
                  <img src={ Photoigh2} alt="FAM-Construction-Ismayilli"/>
                  </div>
                  <div className="col-xl-3">
                  <img src={ Photoigh3} alt="FAM-Construction-Ismayilli"/>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Ismayilligren
