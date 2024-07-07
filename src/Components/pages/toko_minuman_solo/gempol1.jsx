import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/gempol1.png'
import Tokoimg from '../../../assets/toko_minuman_solo/gempol1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Gempol1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/gempol/26">
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
                          <h2>Warung Makan Es Gempol Pleret dan Mie Thoprak Mangkuyudan</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Dr. Wahidin, Purwosari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57148</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/SzoM3PrJKddhPKuYA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Gempol1;
