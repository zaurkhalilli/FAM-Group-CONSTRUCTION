import React from 'react'
import '../Tariximiz/Tariximiz.scss'
import Phototarix from '../Tariximiz/tariximizcover.jpg'
import Phototarixmain from '../Tariximiz/tarixmain.jpg'
const Tariximiz = () => {
  return (
    <div id='tariximiz'>
      <div className="tariximiztop">
        <img src={Phototarix} alt="" />
      </div>
      <div className="tariximizmain">
        <div className="container">
            <div className="row">
                <h2>TARİXİMİZ</h2>
                <div className="col-xl-4">
                    <img src={Phototarixmain} alt="" />
                </div>
                <div className="col-xl-8">
                    <p>“FAM Group Construction” MMC “FAM Group” ailəsinin qollarından biridir. 02.12.2019-cu il tarixində 1912020386947900 nömrəli dövlət reyestrindən çıxarış əsasında dövlət qeydiyyatına alınıb, 07.01.2020-ci il tarixindən isə fəaliyyətə başlayıb.
                    Müəssisə fəaliyyətə başladığı vaxtdan bugünədək aşağıdakı layihələrin icrasını həyata keçirmişdir: Tərəflər arasında bağlanmış Xidmət müqaviləsinə əsasən 07 yanvar 2020-ci il tarixindən etibarən işin icrasına başlanmışdır. İşin icra olunduğu müddət ərzində quruducunun regenerasiya balonu, 12 bar təzyiqli olan iri tonnajlı çənlərin qaynağı və təmiri işləri yerinə yetirilmiş və 22 yanvar 2020-ci il tarixində təhvil verilmişdir. Etilen-Polietilen zavodunda aşağıdakı işlər yerinə yetirilmişdir:
                    24 yanvar 2020-ci il tarixli müqaviləyə əsasən boruların boyanması və qumlanması işləri yerinə yetirilmiş və 29 fevral 2020-ci il tarixində təhvil verilmişdir. 22 iyun 2020-ci il il tarixində bağlanılmış 2-ci müqaviləyə əsasən buxar turbininin borularının qaynaq və izolyasiya işləri yerinə yetirilmişdir. 
                    </p>
                </div>
                <p>Müqaviləyə əsasən metal boruların daş yun və aliminium vərəqlə izolyasiya işləri və metal boruların qaynaq, quraşdırma işləri görülmüş və 30 yanvar 2021-ci il tarixində təhvil verilmişdir. 01 noyabr 2020-ci il tarixində bağlanılmış müqaviləyə əsasən buxar turbininin boru xətlərinin su və hava testi işləri yerinə yetirilmişdir. Bura PN16 yanğın xəttinin testi, tüstü bacasının hava testi, 2,4,6,8,16 inc və 20 inc boru xəttinin testi işləri daxildir. Bu layihə 28 dekabr 2020-ci il tarixində təhvil vermişdir. Göyçay rayonunda Nar Hotelində, metal konstruksiyadan Nar ofisinin hazırlanması işləri görülmüşdür. 28 yanvar 2021-ci il tarixində Xacmaz ES-da soyutma radiatorlarının təmiri və quraşdırılması işləri yerinə yetirilmiş və 25 fevral 2021-ci il tarixində təhvil verilmişdir. “FAM Group Construction” MMC-nin baş ofisi Bakı şəhəri, N.Nərimanov rayonu, Əhməd Rəcəbli küçəsi 226 ünvanında yerləşir.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tariximiz
