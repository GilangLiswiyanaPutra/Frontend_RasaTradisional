import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/tahu1.png'
import Tokoimg from '../../../assets/toko_makanan_solo/tahukupat1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Tahu_Kupat1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/tahukupat/18">
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
                          <h2>Tahu Kupat Sido Mampir Pak Pur</h2>
                          <p> 4.7⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Veteran No.78, Gajahan, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57156</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>082134361712</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/YMbd2z2HBFUUeLt77" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Tahu_Kupat1;
