import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/sototauco2.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/sototauco2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const SotoTauco2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/sototauco/7">
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
                          <h2>Sauto Madi - Soto Tauco</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Gurami No.7, Tegalsari, Kec. Tegal Bar., Kota Tegal, Jawa Tengah 52111</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085802813390</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/fvAiQHS1tji9y1th9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default SotoTauco2;
