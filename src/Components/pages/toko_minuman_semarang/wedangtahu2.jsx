import React from 'react';
import Map from '../../../assets/toko_minuman_semarang/map/wedangtahu2.png'
import Tokoimg from '../../../assets/toko_minuman_semarang/wedangtahu2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const WedangTahu2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/wedangtahu/35">
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
                          <h2>Wedang Tahu Khas Semarang Pak Pardi</h2>
                          <p> 4.3⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>50138, Jl. Gajahmada No.70-C, Bangunharjo, Semarang Tengah, Semarang City, Central Java 50133</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081901285497</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/AF5eNyuDR7tUk7nh9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default WedangTahu2;
