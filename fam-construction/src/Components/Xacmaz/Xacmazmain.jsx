import React from 'react'
import { Link } from 'react-router-dom';
import '../Xacmaz/Xacmaz.scss'
import { BsBoxArrowLeft } from "react-icons/bs";
const Xacmazmain = () => {
  return (
    <div id='Xacmaz'>
      <div className="xacmaztop">
     <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029599_11.jpg" alt="FAM-Group-Construction-Xacmaz" />
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Xaçmaz Elektrik Stansiyası</h4>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029597_2.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029597_3.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029597_4.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029598_5.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="	https://famgroupconstruction.az/uploads/posts/2021-07/1627029598_6.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029598_7.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029599_8.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="	https://famgroupconstruction.az/uploads/posts/2021-07/1627029599_9.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029599_10.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029599_11.jpg" alt="FAM-Group-Construction-Xacmaz" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Xacmazmain