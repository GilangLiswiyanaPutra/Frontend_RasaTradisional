import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/buntel2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/buntel2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Sate_Buntel2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/satebuntel/14">
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
                          <h2>Sate Kambing & Tengkleng Rica Rica Pak Manto</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Honggowongso No.36, Sriwedari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57141</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081229220448</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@satekambingpakminto</p>
                    <a href="https://maps.app.goo.gl/eBL953BGCr9g3TKU9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Sate_Buntel2;
