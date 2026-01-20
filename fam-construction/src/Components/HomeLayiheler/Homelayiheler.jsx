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
        <Link to="/layiheler" class="btn"> <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAM-Group-Construction-Layihələr" /> </Link>
       <div className="layihetext">
       <p>Gəncə şəhərində Bakcell Müştəri xidmətləri mərkəzinin təmiri</p>
       </div>
        </div>
        <div className="col-xl-6">
        <Link to="/layiheler" class="btn"> <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAM-Group-Construction-Layihələr" /> </Link>
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
