import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/asle1.png'
import Tokoimg from '../../../assets/toko_minuman_solo/asle1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Asle1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/asle/25">
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
                          <h2>Wedang Asle De Topo</h2>
                          <p> 4.9⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Kamandungan No.2, Baluwarti, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57144</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085867426235</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/UyJfJeQ43zihHfGi8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Asle1;
