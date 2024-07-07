import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/tahugimbal1.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/tahugimbal1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const TahuGimbal1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/tahugimbal/29">
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
                          <h2>Tahu Gimbal HAJI EDY (sejak 1972)</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Pandanaran No.2, Mugassari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081329407509</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/hP9vt5oSAHAQNL1g7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default TahuGimbal1;
