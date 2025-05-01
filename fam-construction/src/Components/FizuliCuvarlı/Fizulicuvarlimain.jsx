import React from 'react'
import '../FizuliCuvarlı/Fizulicuvarlimain.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photofzc from '../FizuliCuvarlı/fizulicuvarli1.jpeg'
import Photofzc2 from '../FizuliCuvarlı/fizulicuvarli2.jpeg'
import Photofzc3 from '../FizuliCuvarlı/fizulicuvarli3.jpeg'
const Fizulicuvarlimain = () => {
  return (
    <div id='fizulicuvarli'>
        <div className="fizulicuvarlitop">
           <img src={Photofzc3} alt="FAM-Construction-Fizuli-Cuvarli" />
           </div>
            <div className="container">
                <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
                <hr />
                 <div className="row g-4">
                   <h4>Fizuli Cuvarlı </h4>
                   <div className="col-xl-3">
                   <img src={Photofzc} alt="FAM-Construction-Fizuli-Cuvarli"/>
                   </div>
                   <div className="col-xl-3">
                   <img src={Photofzc2} alt="FAM-Construction-Fizuli-Cuvarli"/>
                   </div>
                   <div className="col-xl-3">
                   <img src={Photofzc3} alt="FAM-Construction-Fizuli-Cuvarli"/>
                   </div>
                 </div>
                </div>
    </div>
  )
}

export default Fizulicuvarlimain
