import React from 'react'
import { Link } from 'react-router-dom';
import styled from '../Azerkimya/Azerkimya.scss'
import { BsBoxArrowLeft } from "react-icons/bs";
const Azerkimyamain = () => {
  return (
     <div id='Azerkimya'>
         <div className="azerkimyatop">
        <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
         <p>Azərkimya Modernləşdirmə</p>
        </div>
        <div className="container">
        <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
        <hr />
         <div className="row g-4">
           <h4>Azərkimya Modernləşdirmə</h4>
           <div className="col-xl-3">
           <img src="	https://famgroupconstruction.az/uploads/posts/2021-07/1627027809_1.jpg" alt="" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627027816_2.jpg" alt="" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627027822_3.jpg" alt="" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627027822_3.jpg" alt="" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627027836_6.jpg" alt="" />
           </div>
         </div>
        </div>
       </div>
  )
}

export default Azerkimyamain
