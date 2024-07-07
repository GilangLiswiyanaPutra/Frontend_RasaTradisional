import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/timlo2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/timlo2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Timlo2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/timlo/16">
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
                          <h2>Warung Selat Mbak Lies</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Yudhistira No.9, Serengan, Kec. Serengan, Kota Surakarta, Jawa Tengah 57155</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0271653332</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@selat.mbaklies</p>
                    <a href="https://maps.app.goo.gl/bfDsBzBe4VWrcxzt9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Timlo2;
