import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/kupatglabed2.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/kupatglabed2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const KupatGlabed2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/kupatglabed/2">
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
                          <h2>Kupat Glabed Ibu Wartini</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Ayam No.1, Randugunting, Kec. Tegal Sel., Kota Tegal, Jawa Tengah 52131</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/kHTAbcg72QyTPDh36" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default KupatGlabed2;
