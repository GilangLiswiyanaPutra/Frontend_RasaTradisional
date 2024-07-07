import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/kapal2.png'
import Tokoimg from '../../../assets/toko_minuman_solo/kapal2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Kapal2 = () => {
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
                          <h2>Es Kapal Depan Museum Keris Stadion Sriwedari</h2>
                          <p> 4.8⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl Bayangkara, gang Jembatan Depan Museum Keris Stadion, Sriwedari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57141</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>08562825766</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/uuQD6oMCJ1VVYKWp9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Kapal2;
