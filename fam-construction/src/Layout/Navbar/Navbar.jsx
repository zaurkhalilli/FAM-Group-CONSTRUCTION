import React from 'react'
import '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo1.jpg'
const Navbar = () => {
  return (
    <div id='navbar'>
        <div className="container">
            <div className="row g-1">
                <div className="col-xl-2">
                   <div className="logo">
                   <Link to="/">
                    <img src={logo} alt="FAM-Group-Construction" />
                   </Link>
                   </div>
                </div>
                    <div className="col-xl-10">
                  <div className="container">
                    <div className="row">
                    <div className="col-xl-2"> 
                          <div className="link">
                          <Link to="/" >ANA SƏHİFƏ</Link> 
                          </div>
                          </div>
                        <div className="col-xl-2"> 
                          <div className="link">
                          <Link to="/haqqimizda">HAQQIMIZDA</Link>
                          </div>
                        </div>
                        <div className="col-xl-2"> 
                          <div className="link">
                          <Link to="/xidmetler">XİDMƏTLƏR</Link>
                          </div>
                        </div>
                        <div className="col-xl-2"> 
                          <div className="link">
                          <Link to="/layiheler">LAHİYƏLƏR</Link>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="link">
                          <Link to="/elaqe">ƏLAQƏ</Link>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="link">
                          <Link to="/lisenziyalar">LİSENZİYALAR</Link>
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

export default Navbar