import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/rujakteplak1.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/rujakteplak1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const RujakTeplak1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/rujakteplak/1">
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
                          <h2>Rujak Teplak Toko Mitra Bu Kapsah</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Letjen. Suprapto No.77-89, Mintaragen, Kec. Tegal Bar., Kota Tegal, Jawa Tengah 52112</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/ncGna6pz25U6SWgE8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default RujakTeplak1;
