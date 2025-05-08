import React from 'react'
import '../HomeLayiheler/Homelayiheler.scss'
import { Link } from 'react-router-dom';
const Homelayiheler = () => {
  return (
    <div id='layiheler'>
      <h3>BİTMİŞ VƏ DAVAM EDƏN LAYİHƏLƏR</h3>
       <div className="layiheimg">
       <div className="container">
       <div className="row g-5">
        <div className="col-xl-6">
        <Link to="/layiheler" class="btn"> <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657671_7.jpg" alt="FAM-Group-Construction-Layihələr" /> </Link>
       <div className="layihetext">
       <p>Gəncə şəhərində Bakcell Müştəri xidmətləri mərkəzinin təmiri</p>
       </div>
        </div>
        <div className="col-xl-6">
        <Link to="/layiheler" class="btn"> <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654975_3.jpg" alt="FAM-Group-Construction-Layihələr" /> </Link>
       <div className="layihetext">
       <p>Fizuli rayonu Zobucuq 4 qəsəbəsindəki 50 metrəlik ötürücü baza stansiyasının inşası</p>
       </div>
        </div>
       </div>
       </div>
       </div>
     </div>
  )
}

export default Homelayiheler
