import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/kapal1.png'
import Tokoimg from '../../../assets/toko_minuman_solo/kapal1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Kapal1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/kapal/24">
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
                          <h2>ES KAPAL ASLI SRIWEDARI 07 ISKANDARIA</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Bhayangkara, Sriwedari, Kec. Laweyan, Kota Surakarta, Jawa Tengah</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081336170095</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/QDVGgseh9mASuBSD6" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Kapal1;
