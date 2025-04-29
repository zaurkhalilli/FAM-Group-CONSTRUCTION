import React from 'react'
import '../Lisenziyalar/Lisenziyalarmain.scss'
import Photo from '../Lisenziyalar/Lisenziya1.jpeg'
import Photo2 from '../Lisenziyalar/Lisenziya2.jpeg'
import Photo3 from '../Lisenziyalar/Lisenziya3.jpeg'
import Photo4 from '../Lisenziyalar/Lisenziya4.jpeg'
const Lisenziyalarmain = () => {
  return (
    <div id='lisenziyalar'>
      <div className="lisenziyalartop">
     <img src="https://famgroupconstruction.az/templates/az/images/services-cat.jpg" alt="" />
     </div>
       <div className="lisenziyalaresas">
       <div className="container">
            <div className="row g-4">
                <div className="col-xl-6">
                    <img src={Photo4} alt="" />
                </div>
                <div className="col-xl-6">
                <img src={Photo2} alt="" />
                </div>
                <div className="col-xl-6">
                <img src={Photo3} alt="" />
                </div>
                <div className="col-xl-6">
                <img src={Photo} alt="" />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Lisenziyalarmain
