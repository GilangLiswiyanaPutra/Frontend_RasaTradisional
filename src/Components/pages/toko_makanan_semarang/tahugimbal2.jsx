import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/tahugimbal2.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/tahugimbal2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const TahuGimbal2 = () => {
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
                          <h2>Tahu Gimbal Semarang "Mbak Mira"</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Telaga Elok III Blok E1 no 4, Telagamurni, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17530</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>082112812846</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/7wd3eZsWtkF4P74y5" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default TahuGimbal2;
