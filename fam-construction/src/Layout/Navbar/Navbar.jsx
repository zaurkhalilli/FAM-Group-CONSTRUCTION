import React from 'react'
import styled from '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div id='navbar'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                   <div className="logo">
                   <Link to="/"> <img src="https://famgroupconstruction.az/templates/az/images/logo.jpg" alt="FAM Group Logo" /></Link>
                   </div>
                </div>
                <div className="col-md-9">
                   <div className="link">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-2"> <Link to="/">ANA SƏHİFƏ</Link> </div>
                        <div className="col-xl-2"> <Link to="/haqqimizda">HAQQIMIZDA</Link></div>
                        <div className="col-xl-2"> <Link to="/xidmetler">XİDMƏTLƏR</Link></div>
                        <div className="col-xl-2"> <Link to="/lahiyeler">LAHİYƏLƏR</Link></div>
                        <div className="col-xl-2"> <Link to="/elaqe">ƏLAQƏ</Link></div>
                        <div className="col-xl-2">
                        <a href="Fam"> <img src="https://www.famgroupconsulting.az/assets/images/en.png" alt="" /> </a> 
                        <a href="Fam"> <img src="https://www.famgroupconsulting.az/assets/images/az.png" alt="" /> </a> 
                        <a href="Fam"> <img src="https://www.famgroupconsulting.az/assets/images/ru.png" alt="" /> </a>
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