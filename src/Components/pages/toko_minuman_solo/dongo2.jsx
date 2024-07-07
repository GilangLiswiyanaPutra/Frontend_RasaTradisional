import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/dongo2.png'
import Tokoimg from '../../../assets/toko_minuman_solo/dongo2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Dongo2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/dongo/22">
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
                          <h2>Dongo Cahaya</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Cokrobaskoro 3 No.6, Tipes, Serengan, Surakarta City, Central Java 57154</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081226359171</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@dongo_cahaya</p>
                    <a href="https://maps.app.goo.gl/ydgEXAauoaGg13o66" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Dongo2;
