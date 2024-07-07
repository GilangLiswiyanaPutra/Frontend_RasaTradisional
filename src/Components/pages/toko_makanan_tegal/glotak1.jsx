import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/glotak1.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/glotak1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Glotak1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/glotak/4">
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
                          <h2>Glotak Ayam Ibu Asri Pasar Pagi</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Area Parkiran pasar pagi Jl. Barito, Panggung, Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52121</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/pkGHNy8rtUZaeUu67" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Glotak1;
