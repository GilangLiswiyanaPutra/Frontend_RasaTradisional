import React from 'react';
import Map from '../../../assets/toko_minuman_tegal/map/eslontrong1.png'
import Tokoimg from '../../../assets/toko_minuman_tegal/eslontrong1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const esLontrong1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/eslontrong/9">
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
                          <h2>Es Lontrong Slawi</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Letjen Suprapto No.26, Slawi, Slawi Wetan, Kec. Slawi, Kabupaten Tegal, Jawa Tengah</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/sf6RUFSG9NB2xnN38" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default esLontrong1;
