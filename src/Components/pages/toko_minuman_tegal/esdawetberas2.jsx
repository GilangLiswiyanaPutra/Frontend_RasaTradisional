import React from 'react';
import Map from '../../../assets/toko_minuman_tegal/map/esdawetberas2.png'
import Tokoimg from '../../../assets/toko_minuman_tegal/esdawetberas2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const esDawetBeras2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/esdawetberas/10">
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
                          <h2>Es Dawet Beras Pojokan Pasar Pagi</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Ahmad Yani No.142-140, Mangkukusuman, Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52121</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/d1yr2w6exf1aUVMo8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default esDawetBeras2;
