import React from 'react'
import  '../LayiheEsas/Layiheesas.scss'
import { Link } from 'react-router-dom';
import Photoleaf from '../3.7m-LEAFSPACE/leafspace1.jpeg'
import Photobs from '../Baku-Shamakhi/baki-samaxi1.jpeg'
import Photoengixaran from '../Engixaran-vilage/engixaran1.jpeg'
import Photocuvarli from '../Fizuli Cuvarlı/fizulicuvarli3.jpeg'
import Photogreenhouse from '../Ismayılı GREN HOUSE/Greenhouse1.jpeg'
import Photomuhafize from '../NORM MUHAFIZƏ KÖŞKÜ/norm1.jpeg'
import Photoqusarhub from '../Qusar HUB/qusar (6).jpeg'
const Layiheleresas = () => {
  return (
    <div id='layiheesas'>
      <div className="container">
        <div className="kecid">
          <h3>BİTMİŞ LAYİHƏLƏR</h3>
        </div>
        <div className="row g-4">
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690657671_7.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Gəncə şəhərində Bakcell Müştəri xidmətləri mərkəzinin təmiri</h5>
            <br />
            <Link to="/bakcell" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656674_1.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Fizuli rayonu Zobucuq 4 qəsəbəsindəki 50 metrəlik ötürücü baza stansiyasının inşası</h5>
            <Link to="/fizuli" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>  
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656001_11.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Siyəzən rayonu ərazisində 30 metrəlik Ötürücü baza stansiyasının inşaası</h5>
            <Link to="/siyezen" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>  
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654975_3.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Fizuli rayonu SeyyidƏhmədli kəndində inşaa etdiyimiz 60 metrəlik Ötürüçü baza stansiyası</h5>
            <Link to="/seyidehmedli" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>  
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690654289_s1-2.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Qusar şəhərində inşaa etdiyimiz 50 metrəlik Ötürücü Baza Stansiyası</h5>
            <Link to="/qusar" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>  
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690635551_q1.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Ağdam rayonu Şıxbabalı kəndində inşaa etdiyimiz 60 metrəlik Ötürücü Baza Stansiyasiyası</h5>
            <Link to="/agdam" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>  
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627029549_bez-imeni-1.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Xaçmaz Elektrik Stansiyası</h5>
            <br />
            <Link to="/xacmaz" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>  
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src="https://famgroupconstruction.az/uploads/posts/2021-07/1627027789_1111111111.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Azərkimya Modernləşdirmə</h5>
            <br />
            <Link to="/azerkimya" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photoleaf} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">LeafSpace 3.7m</h5>
            <br />
            <Link to="/leafspace" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photobs} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Bakı - Şamaxı yolu</h5>
            <br />
            <Link to="/baki-samaxi" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photoengixaran} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"> Engixaran Village </h5>
            <br />
            <Link to="/" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photocuvarli} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"> Fizuli Cuvarlı</h5>
            <br />
            <Link to="/" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photogreenhouse} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"> İsmayıllı Gren House </h5>
            <br />
            <Link to="/" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photomuhafize} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"> NORM Mühafizə köşkü </h5>
            <br />
            <Link to="/" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
          <div className="col-xl-4">
          <div class="card">
          <img src={Photoqusarhub} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"> Qusar HUB </h5>
            <br />
            <Link to="/" class="btn btn-primary">ƏTRAFLI MƏLUMAT</Link>   
          </div>
        </div>
          </div>
        </div>
      </div>
     <div className="kecid">
      <br />
     <h3>DAVAM EDƏN LAYİHƏLƏR</h3>
     </div>
    </div>
  )
}

export default Layiheleresas
