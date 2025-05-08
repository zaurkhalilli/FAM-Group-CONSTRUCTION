import React from 'react'
import '../Seyidehmedli/Seyidehmedli.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
const Seyidehmedlimain = () => {
  return (
     <div id='Seyidehmedli'>
         <div className="seyidehmedlitop">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654975_3.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
        </div>
        <div className="container">
        <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
        <hr />
         <div className="row g-4">
           <h4>Fizuli rayonu SeyyidƏhmədli kəndində inşaa etdiyimiz 60 metrəlik Ötürüçü baza stansiyası</h4>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654975_3.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654932_1.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654945_2.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655029_4.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655049_5.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655137_6.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655154_7.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655197_8.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655275_9.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
           <div className="col-xl-3">
           <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690655310_10.jpg" alt="FAM-Group-Construction-Seyidehmedli" />
           </div>
         </div>
        </div>
       </div>
  )
}

export default Seyidehmedlimain
