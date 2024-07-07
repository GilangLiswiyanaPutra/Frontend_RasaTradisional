import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/timlo1.png'
import Tokoimg from '../../../assets/toko_makanan_solo/timlo1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Timlo1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/timlo/16">
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
                          <h2>Timlo Mbak Tiek</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Bhayangkara No.43, Tipes, Kec. Serengan, Kota Surakarta, Jawa Tengah 57154</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>08179464518</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@timlo.mbaktiek</p>
                    <a href="https://maps.app.goo.gl/q3HJvVwx9ttESh9v9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Timlo1;
