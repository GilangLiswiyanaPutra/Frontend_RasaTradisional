import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/wingkobabat1.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/wingkobabat1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const WingkoBabat1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/wingkobabat/31">
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
                          <h2>Wingko Babat Pak Moel</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Pekunden Tengah No.1110, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0248416914</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@wingkobabatpakmoel</p>
                    <a href="https://maps.app.goo.gl/jMz3BF4v6xN3cxTF8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default WingkoBabat1;
