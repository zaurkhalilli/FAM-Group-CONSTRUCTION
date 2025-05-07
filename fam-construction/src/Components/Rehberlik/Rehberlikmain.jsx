import React from 'react'
import '../Rehberlik/Rehberlikmain.scss'
import Photorehberlik from '../Rehberlik/rehberlikcover.jpg'
const Rehberlikmain = () => {
  return (
    <div id='rehberlik'>
        <div className="rehberliktop">
            <img src={Photorehberlik} alt=""/>
        </div>
        <div className="rehberlikmain">
            <div className="container">
                <p>RƏHBƏRLİK</p>
                <div className="row g-2">
                    <div className="col-xl-4">
                        <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg" alt="" />
                        <h3>Baş Direktor</h3>
                        <h4>İlkin Ağayev</h4>
                    </div>
                    <div className="col-xl-4">
                    <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg" alt="" />
                    <h3>Maliyyə Direktoru</h3>
                    <h4>Mirkazım Hüseynov</h4>
                    </div>
                    <div className="col-xl-4">
                    <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg" alt="" />
                    <h3>İnsan Resursları Üzrə Direktor</h3>
                    <h4>Həbib İsmayılov</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rehberlikmain
