import React from 'react';
import Map from '../../../assets/toko_minuman_semarang/map/esputer2.png'
import Tokoimg from '../../../assets/toko_minuman_semarang/esputer2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const EsPuter2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/esputer/34">
          <img src={Back} alt="" />
          </a>
        </div>
       <div className="map">
                    <img src={Map} alt="logo" />
                </div>
            <div className="toko-container">
                <div className="toko-title">
                  <div className="toko-img-rating">
                      <img src={Tokoimg} alt="" />
                      <div className="rating-container">
                          <h2>Es Puter Herry</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Gg. Pinggir, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085726879157</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/LDEMPmHZxCywHrDC6" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default EsPuter2;
