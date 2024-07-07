import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/liwet1.png'
import Tokoimg from '../../../assets/toko_makanan_solo/liwet1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Nasi_Liwet1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/nasiliwet/15">
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
                          <h2>Nasi Liwet Sukini</h2>
                          <p> 4.7⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Parang Kusumo No.26, Sondakan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57147</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085725003534</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/3HbcuU8kCwnPzRjs7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Nasi_Liwet1;
