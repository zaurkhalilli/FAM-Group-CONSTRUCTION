import React from 'react'
import '../Bakcell/Bakcell.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photobakcell1 from '../Bakcell/Bakcell (6).jpeg'
import Photobakcell2 from '../Bakcell/Bakcell (1).jpeg'
import Photobakcell3 from '../Bakcell/Bakcell (2).jpeg'
import Photobakcell4 from '../Bakcell/Bakcell (3).jpeg'
import Photobakcell5 from '../Bakcell/Bakcell (4).jpeg'
import Photobakcell6 from '../Bakcell/Bakcell (5).jpeg'
import Photobakcell7 from '../Bakcell/Bakcell (7).jpeg'
import Photobakcell8 from '../Bakcell/Bakcell (8).jpeg'
import Photobakcell9 from '../Bakcell/Bakcell (9).jpeg'
const Bakcell = () => {
  return (
    <div id='Bakcell'>
     <div className="backelltop">
     <img src={Photobakcell1} alt="FAM-Group-Construction-Bakcell" />
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Gəncə şəhərində Bakcell Müştəri xidmətləri mərkəzinin təmiri</h4>
        <div className="col-xl-3">
        <img src={Photobakcell2} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell3} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell4} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell5} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell6} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell7} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell8} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
        <div className="col-xl-3">
        <img src={Photobakcell9} alt="FAM-Group-Construction-Bakcell" /> 
        </div>
      </div>
     </div>
    </div>
  )
}

export default Bakcell
