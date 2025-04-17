import React from 'react'
import styled from "../Footer/Footer.scss";
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
          <Link to="/"><img src="https://famgroupconstruction.az/templates/az/images/logo.jpg" alt="Fam Group Logo" />
          </Link>
          </div>
          <div className="col-xl-2">
            <ul> ŞİRKƏT
              <hr />
              <li> <Link to="/">ANA SƏHİFƏ</Link></li>
              <li><Link to="/haqqimizda">HAQQIMIZDA</Link></li>
              <li><Link to="/xidmetler">XİDMƏTLƏR</Link></li>
            </ul>
          </div>
          <div className="col-xl-2">
          <ul> LAYİHƏLƏR
              <hr />
              <li> <Link to="/">BİTMİŞ LAYİHƏLƏR</Link></li>
              <li><Link to="/haqqimizda">DAVAM EDƏN LAYİHƏLƏR</Link></li>
            </ul>
          </div>
          <div className="col-xl-2">
          <ul> QALEREYA
              <hr />
              <li> <Link to="/">FOTO QALEREYA</Link></li>
              <li><Link to="/haqqimizda">VİDEO QALEREYA</Link></li>
            </ul>
          </div>
          <div className="col-xl-2">
          <ul> SOSİAL HESABLAR
              <hr />
              <li> <Link to="/"><IoLogoFacebook size={32}  /></Link></li>
              <li><Link to="/haqqimizda"><FaSquareXTwitter size={30} /></Link></li>
              <li><Link to="/xidmetler"><FiInstagram size={30} /></Link></li>
              <li><Link to="/xidmetler"><FaYoutube size={30} /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
