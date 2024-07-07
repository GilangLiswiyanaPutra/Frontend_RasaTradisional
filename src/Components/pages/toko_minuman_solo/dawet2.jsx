import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/dawet2.png'
import Tokoimg from '../../../assets/toko_minuman_solo/dawet2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Dawet2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/dawet/23">
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
                          <h2>Es Dawet Telasih Khas Solo bang jeks</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Kedung Lumbu, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57155</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>087771702323</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/jiNZFL5BjPQ2uopS7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Dawet2;
