import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/lenjongan2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/lenjongan2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Lenjongan2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/lenjongan/19">
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
                          <h2>Gethuk Lenjongan Bu Lastri</h2>
                          <p> 4.8⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Luang Gatak, Dusun III, Makamhaji, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57161</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085713216311</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/oRU2Trehsa7Lumq46" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Lenjongan2;
