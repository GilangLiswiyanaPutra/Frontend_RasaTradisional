import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/gempol2.png'
import Tokoimg from '../../../assets/toko_minuman_solo/gempol2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Gempol2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/gempol/26">
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
                          <h2>Gempol Pleret & Dawet Telasih Bu Wiji</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Jend. Urip Sumoharjo, Sudiroprajan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57121</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085865409940</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/e4pVpmW4vQCJH5mS7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Gempol2;
