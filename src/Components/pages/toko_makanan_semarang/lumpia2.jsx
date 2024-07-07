import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/lumpia2.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/lumpia2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Lumpia2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/lumpia/27">
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
                          <h2>Lumpia LJ (Lifes Joy)</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Gg. Belakang No.71, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081249676363</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@lumpiasemarang_lifesjoy</p>
                    <a href="https://maps.app.goo.gl/B3ZEGSo1wWdwuRTTA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Lumpia2;
