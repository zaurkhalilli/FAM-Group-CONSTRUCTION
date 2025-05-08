import React from 'react'
import '../Baku-Shamakhi/Bakusamaxi1.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photobs from '../Baku-Shamakhi/baki-samaxi1.jpeg'
import Photobs2 from '../Baku-Shamakhi/baki-samaxi2.jpeg'
import Photobs3 from '../Baku-Shamakhi/baki-samaxi3.jpeg'
import Photobs4 from '../Baku-Shamakhi/baki-samaxi4.jpeg'
import Photobs5 from '../Baku-Shamakhi/baki-samaxi5.jpeg'
import Photobs6 from '../Baku-Shamakhi/baki-samaxi6.jpeg'
const Bakusamaxi1 = () => {
  return (
    <div id='bakusamaxi'>
      <div className="bakusamaxitop">
     <img src={Photobs4} alt="FAM-Group-Construction-Bakı-Şamaxı" />
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Bakı - Şamaxı yolu</h4>
        <div className="col-xl-3">
        <img src={Photobs} alt="FAM-Group-Construction-Bakı-Şamaxı" />
        </div>
        <div className="col-xl-3">
        <img src={Photobs2} alt="FAM-Group-Construction-Bakı-Şamaxı" />
        </div>
        <div className="col-xl-3">
        <img src={Photobs3} alt="FAM-Group-Construction-Bakı-Şamaxı" />
        </div>
        <div className="col-xl-3">
        <img src={Photobs4} alt="FAM-Group-Construction-Bakı-Şamaxı" />
        </div>
        <div className="col-xl-3">
        <img src={Photobs5} alt="FAM-Group-Construction-Bakı-Şamaxı" />
        </div>
        <div className="col-xl-3">
        <img src={Photobs6} alt="FAM-Group-Construction-Bakı-Şamaxı" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Bakusamaxi1
