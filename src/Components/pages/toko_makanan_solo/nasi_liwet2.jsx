import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/liwet2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/liwet2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Nasi_Liwet2  = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/nasiliwet/15">
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
                          <h2>Warung Lesehan Nasi Liwet Mbak Yanti Purwosari</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Dr. Rajiman, Sondakan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57147</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>08122593088</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@nasiliwetmbyanti</p>
                    <a href="https://maps.app.goo.gl/4BU6tqbb5ZY5nxpb8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Nasi_Liwet2;
