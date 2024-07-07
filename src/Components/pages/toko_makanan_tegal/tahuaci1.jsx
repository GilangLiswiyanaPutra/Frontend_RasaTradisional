import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/tahuaci1.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/tahuaci1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const TahuAci1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/tahuaci/5">
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
                          <h2>Tahu Aci Khas Tegal (Rizki Barokah)</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Kejambon, Kec. Tegal Tim., Kota Tegal, Jawa Tengah</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>08568763111</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/uXNNGK8RVNovQaYSA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default TahuAci1;
