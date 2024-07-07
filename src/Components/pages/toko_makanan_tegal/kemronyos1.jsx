import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/kemronyos1.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/kemronyos1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Kemronyos1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/kemronyos/6">
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
                          <h2>Lenjongan Yu Sum Ps.Gedhe</h2>
                          <p> 4.3⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Jend. Urip Sumoharjo, Sudiroprajan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57121</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085229160252</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/iFUGCbM3Kx1c7dvD7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Kemronyos1;
