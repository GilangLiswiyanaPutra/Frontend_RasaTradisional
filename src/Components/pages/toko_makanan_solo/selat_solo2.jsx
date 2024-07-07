import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/selat2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/selat2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Selat_Solo2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/selatsolo/20">
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
                          <h2>SELAT SOLO Bu Rina</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Loh Gondang No.1, Danukusuman, Kec. Serengan, Kota Surakarta, Jawa Tengah 57156</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>081329239162</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/ycBZcVNQQ64r8oV98" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Selat_Solo2;
