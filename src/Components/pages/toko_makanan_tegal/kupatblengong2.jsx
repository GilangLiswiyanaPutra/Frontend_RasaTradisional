import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/kupatblengong2.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/kupatblengong2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const KupatBlengong2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/kupatblengong/3">
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
                          <h2>KUPAT BLENGONG MAS NANANG</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Kraton, Kec. Tegal Bar., Kota Tegal, Jawa Tengah 52112</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/t9ift5287C2dDKyu7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default KupatBlengong2;
