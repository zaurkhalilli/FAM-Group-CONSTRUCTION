import React from 'react'
import '../Bakcell/Bakcell.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
const Bakcell = () => {
  return (
    <div id='Bakcell'>
     <div className="backelltop">
     <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
      <p>Gəncə şəhərində Bakcell Müştəri xidmətləri mərkəzinin təmiri</p>
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Gəncə şəhərində Bakcell Müştəri xidmətləri mərkəzinin təmiri</h4>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657671_7.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657542_1.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657559_2.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657574_3.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657587_4.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657618_5.jpg" alt="" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657649_6.jpg" alt="" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Bakcell
