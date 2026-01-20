import React from 'react'
import '../Lisenziyalar/Lisenziyalarmain.scss'
import Photo from '../Lisenziyalar/Lisenziya.pdf.jpg'
import Photo2 from '../Lisenziyalar/2.jpg'
import Photo3 from '../Lisenziyalar/1.jpg'
import Photo4 from '../Lisenziyalar/Xüsusilisenziya.jpg'
import Photo5 from '../Lisenziyalar/lisenziyacover.jpg'
const Lisenziyalarmain = () => {
  return (
    <div id='lisenziyalar'>
      <div className="lisenziyalartop">
     <img src={Photo5} alt="FAM-Group-Construction-Lisenziyalar" />
     </div>
       <div className="lisenziyalaresas">
        <h2>LİSENZİYALAR</h2>
        <hr />
       <div className="container">
            <div className="row g-5">
                <div className="col-xl-12">
                <div className="container">
                  <div className="row g-3">
                  <div className="col-xl-12">
                    <p>1. 17 Fevral 2021 - ci ildə Azərbaycan Respublikası İqtisadiyyat Nazirliyi tərəfindən , tikintisinə icazə tələb olunan bina və qurğuların tikinti-quraşdırma işlərinin həyata keçirilməsinə icazə verilən lisenziya və lisenziya əlavəsi.</p>
                    </div>
                    <div className="col-xl-4">
                    <img src={Photo} alt="FAM-Group-Construction-Lisenziyalar" />
                    </div>
                    <div className="col-xl-4">
                    <img src={Photo3} alt="FAM-Group-Construction-Lisenziyalar" />
                    </div>
                    <div className="col-xl-4">
                    <img src={Photo2} alt="FAM-Group-Construction-Lisenziyalar" />
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-xl-12">
                <div className="container">
                  <div className="row g-3">
                    <div className="col-xl-12">
                    <p>2. 15 Aprel 2021 - ci ildə Azərbaycan Respublikası İqtisadiyyat Nazirliyi tərəfindən , maye və təbii qaz təsərrüfatı obyektlərinin quraşdırılmasının həyata keçirilməsi haqqında icazə verilən lisenziya.</p>
                    </div>
                    <div className="col-xl-4">
                    <img src={Photo4} alt="FAM-Group-Construction-Lisenziyalar" />
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Lisenziyalarmain
