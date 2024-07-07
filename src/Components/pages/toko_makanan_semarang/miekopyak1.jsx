import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/miekopyak1.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/miekopyak1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const MieKopyak1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/miekopyak/30">
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
                          <h2>Mie Kopyok Pak Dhuwur</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Tanjung No.18A, Pandansari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085641372758</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@miekopyok_pakdhuwur</p>
                    <a href="https://maps.app.goo.gl/55qcEKe9YWpGTwS96" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default MieKopyak1;
