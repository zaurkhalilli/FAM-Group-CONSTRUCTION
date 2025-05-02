import React, { useState } from 'react';
import '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo1.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // Yeni state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/*Desktop Navbar*/}
      <div id='navbar'>
        <div className="navtop">
          <div className="navleft">
            <p><FaMapMarkerAlt color='white' /> Nəriman Nərimanov rayonu,
              Əhməd Rəcəbli küç., 224, 4-cü mərtəbə</p>
          </div>
          <div className="navright">
            <div className="list">
              <li><Link to="/"><IoLogoFacebook size={25} /></Link></li>
              <li><Link to="/haqqimizda"><FaSquareXTwitter size={21} /></Link></li>
              <li><Link to="/xidmetler"><FiInstagram size={21} /></Link></li>
              <li><Link to="/xidmetler"><FaYoutube size={24} /></Link></li>
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
                  <div className="col-xl-2"><div className="link"><Link to="/" >ANA SƏHİFƏ</Link></div></div>
                  <div className="col-xl-2">
                    <div className="link">
                      <div className="nav-drop nav-drop2">
                        <Link to="/haqqimizda">HAQQIMIZDA</Link>
                        <div className="nav__dropdown">
                          <Link to="/tariximiz">Tariximiz</Link>
                          <Link to="/rehberlik">Rəhbərlik</Link>
                          <Link to="/lisenziyalar">Lisenziyalar</Link>
                          <Link to="/ethics">Uyğunluq</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2"><div className="link"><Link to="/xidmetler">XİDMƏTLƏR</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/layiheler">LAHİYƏLƏR</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/elaqe">ƏLAQƏ</Link></div></div>
                  <div className="col-xl-2"><div className="link"><Link to="/karyera">KARYERA</Link></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Navbar */}
      <div className="navbar__tablet">
        <div className="navbar__tablet-menu">
          <div className="navbarlogo">
            <Link to="/"><img src="https://famgroupconstruction.az/templates/az/images/logo.jpg" alt="Fam Group Logo" /></Link>
          </div>
          <Link to="/">ANA SƏHİFƏ</Link>
          <div className="tablet-dropdown">
            <Link to="/haqqimizda">HAQQIMIZDA</Link>
            <div className="tablet-dropdown-menu">
            <Link to="/tariximiz">Tariximiz</Link>
            <Link to="/rehberlik">Rəhbərlik</Link>
            <Link to="/lisenziyalar">Lisenziyalar</Link>
            <Link to="/ethics">Uyğunluq</Link>
            </div>
          </div>
          <Link to="/xidmetler">XİDMƏTLƏR</Link>
          <Link to="/layiheler">LAYİHƏLƏR</Link>
          <Link to="/elaqe">ƏLAQƏ</Link>
          <Link to="/karyera">KARYERA</Link>
        </div>
      </div>

      {/* Mobil Navbar */}
      <div className="navbar__mobile">
        <div className="navbar__burger" onClick={toggleMenu}>
          <div className="navbarlogo">
            <Link to="/"><img src="https://famgroupconstruction.az/templates/az/images/logo.jpg" alt="Fam Group Logo" /></Link>
          </div>
          ☰
        </div>
        {menuOpen && (
          <div className="navbar__mobile-menu">
            <Link to="/">ANA SƏHİFƏ</Link>
            <Link to="/haqqimizda">HAQQIMIZDA</Link>
            <Link to="/tariximiz">TARİXİMİZ</Link>
            <Link to="/rehberlik">RƏHBƏRLİK</Link>
            <Link to="/lisenziyalar">LİSENZİYALAR</Link>
            <Link to="/ethics">UYĞUNLUQ</Link>
            <Link to="/xidmetler">XİDMƏTLƏR</Link>
            <Link to="/layiheler">LAYİHƏLƏR</Link>
            <Link to="/elaqe">ƏLAQƏ</Link>
            <Link to="/karyera">KARYERA</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
