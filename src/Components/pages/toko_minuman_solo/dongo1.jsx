import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/dongo1.png'
import Tokoimg from '../../../assets/toko_minuman_solo/dongo1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Dongo1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/dongo/22">
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
                          <h2>Wedang Dongo MJ-9</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Brigjend Katamso No.86B, Mojosongo, Kec. Jebres, Kota Surakarta, Jawa Tengah 57128</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0271857247</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/SFx7NHbGDU8vbU7K7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Dongo1;
