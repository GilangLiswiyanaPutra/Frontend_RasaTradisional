import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/glotak2.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/glotak2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Glotak2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/glotak/4">
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
                          <h2>Bubur dan Glotak Bu Iyah</h2>
                          <p> 5.0⭐⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Hang Tuah No.48, Tegalsari, Kec. Tegal Bar., Kota Tegal, Jawa Tengah 52111</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/mnv6aYzozhY439ag8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Glotak2;
