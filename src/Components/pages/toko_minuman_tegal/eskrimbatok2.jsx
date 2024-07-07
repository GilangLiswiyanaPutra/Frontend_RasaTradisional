import React from 'react';
import Map from '../../../assets/toko_minuman_tegal/map/eskrimbatok2.png'
import Tokoimg from '../../../assets/toko_minuman_tegal/eskrimbatok2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const esKrimBatok2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/eskrimbatok/13">
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
                          <h2>Kedai Ice Cream Batok Fullana</h2>
                          <p> 5.0⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Ir. H. Juanda, Cregomas Kulon, Pakembaran, Kec. Slawi, Kabupaten Tegal, Jawa Tengah 52415</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/jb9hb2vBcgkyZuct6" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default esKrimBatok2;
