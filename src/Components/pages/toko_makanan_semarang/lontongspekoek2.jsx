import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/lontongspekoek2.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/lontongspekoek2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const LontongSpekoek2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/lontongspekoek/32">
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
                          <h2>Lapis Legit Niki Sae</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Senjoyo 2 No.7 A, Bugangan, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50126</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0243567107</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/1Emy9d7k6ExfS4M86" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default LontongSpekoek2;
