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
         <div className="footerlogo">
         <Link to="/"><img src="https://famgroupconstruction.az/templates/az/images/logo.jpg" alt="Fam Group Logo" />
         </Link>
         </div>
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
              <li> <Link to="/layiheler">BİTMİŞ LAYİHƏLƏR</Link></li>
              <li><Link to="/layiheler">DAVAM EDƏN LAYİHƏLƏR</Link></li>
            </ul>
          </div>
          <div className="col-xl-2">
          <ul> QALEREYA
              <hr />
              <li> <Link to="/layiheler">FOTO QALEREYA</Link></li>
              <li><Link to="/layiheler">VİDEO QALEREYA</Link></li>
            </ul>
          </div>
          <div className="col-xl-2">
         <div className="social">
           <ul> SOSİAL HESABLAR
              <hr />
            <div className="list">
              <li><Link to="/"><IoLogoFacebook size={34}  /></Link></li>
              <li><Link to="/haqqimizda"><FaSquareXTwitter size={30} /></Link></li>
              <li><Link to="/xidmetler"><FiInstagram size={30} /></Link></li>
              <li><Link to="/xidmetler"><FaYoutube size={30} /></Link></li>
            </div>
             </ul>
         </div>
          </div>
        </div>
      </div>
      <div className="sonluq">
      <span>
      Copyright © 2025
      <br />
      FAM GROUP MEDIA. Bütün hüquqlar qorunur.
      </span>
      </div>
    </div>
  )
}

export default Footer
