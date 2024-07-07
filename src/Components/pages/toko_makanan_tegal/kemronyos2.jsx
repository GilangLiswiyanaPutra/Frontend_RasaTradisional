import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/kemronyos2.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/kemronyos2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Kemronyos2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/kemronyos/6">
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
                          <h2>Sate Kambing Muda CEMPE LEMU Kapten Sudibyo</h2>
                          <p> 4.8⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Kapten Sudibyo No.197, Randugunting, Kec. Tegal Sel., Kota Tegal, Jawa Tengah 52133</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@satekambingmuda.cempelemu</p>
                    <a href="https://maps.app.goo.gl/CmWJ4CqvW1n8wycWA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Kemronyos2;
