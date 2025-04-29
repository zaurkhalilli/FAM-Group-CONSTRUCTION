import React from 'react'
import '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo1.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
const Navbar = () => {
  return (
    <div id='navbar'>
   <div className="navtop">
   <div className="navleft">
   <p><FaMapMarkerAlt color='white' />    Nəriman Nərimanov rayonu,
   Əhməd Rəcəbli küç., 224, 4-cü mərtəbə</p>
   </div>
   <div className="navright">
      <div className="list">
                   <li><Link to="/"><IoLogoFacebook size={23}  /></Link></li>
                   <li><Link to="/haqqimizda"><FaSquareXTwitter size={20} /></Link></li>
                   <li><Link to="/xidmetler"><FiInstagram size={20} /></Link></li>
                   <li><Link to="/xidmetler"><FaYoutube size={20} /></Link></li>
                 </div>
   </div>
   </div>
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
                          <div className="nav-drop nav-drop2">
                            <Link to="/haqqimizda">HAQQIMIZDA</Link>
                            <div className="nav__dropdown">
                              <Link to="/haqqimizda/tarixce">Tarixçə</Link>
                              <Link to="/haqqimizda/rehberlik">Rəhbərlik</Link>
                              <Link to="/lisenziyalar">Lisenziyalar</Link>
                              <Link to="/uygunluq">Uyğunluq</Link>
                            </div>
                          </div>
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
                          <Link to="/karyera">KARYERA</Link>
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