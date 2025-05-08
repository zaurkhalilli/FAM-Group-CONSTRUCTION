import React from 'react'
import '../Qusar-HUB/Qusarhubmain.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
import Photoqsh from '../Qusar-HUB/qusar (1).jpeg'
import Photoqsh2 from '../Qusar-HUB/qusar (2).jpeg'
import Photoqsh3 from '../Qusar-HUB/qusar (3).jpeg'
import Photoqsh4 from '../Qusar-HUB/qusar (4).jpeg'
import Photoqsh5 from '../Qusar-HUB/qusar (5).jpeg'
import Photoqsh6 from '../Qusar-HUB/qusar (6).jpeg'
const Qusarhubmain = () => {
  return (
    <div id='qusarhub'>
        <div className="qusarhubtop">
                <img src={ Photoqsh4 } alt="FAM-Group-Construction-Qusarhub" />
                </div>
                <div className="container">
                    <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
                    <hr />
                      <div className="row g-4">
                        <h4>Qusar HUB</h4>
                        <div className="col-xl-3">
                        <img src={ Photoqsh} alt="FAM-Group-Construction-Qusarhub"/>
                        </div>
                        <div className="col-xl-3">
                        <img src={ Photoqsh2} alt="FAM-Group-Construction-Qusarhub"/>
                        </div>
                        <div className="col-xl-3">
                        <img src={ Photoqsh3} alt="FAM-Group-Construction-Qusarhub"/>
                        </div>
                        <div className="col-xl-3">
                        <img src={ Photoqsh4} alt="FAM-Group-Construction-Qusarhub"/>
                        </div>
                        <div className="col-xl-3">
                        <img src={ Photoqsh5} alt="FAM-Group-Construction-Qusarhub"/>
                        </div>
                        <div className="col-xl-3">
                        <img src={ Photoqsh6} alt="FAM-Group-Construction-Qusarhub"/>
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default Qusarhubmain
