import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/pisangplenet1.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/pisangplenet1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const PisangPlenet1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/pisangplenet/33">
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
                          <h2>Pisang Plenet "Pak Yuli"</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Gajahmada No.13, Kembangsari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50135</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/EjEA6xb4vwMn7Zdf6" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default PisangPlenet1;
