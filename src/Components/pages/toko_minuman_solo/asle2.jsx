import React from 'react';
import Map from '../../../assets/toko_minuman_solo/map/asle2.png'
import Tokoimg from '../../../assets/toko_minuman_solo/asle2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Asle2 = () => {
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
                          <h2>WEDANG ASLE & RONDE</h2>
                          <p> 5.0⭐⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Sutan Syahrir No.145, Setabelan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0882008204841</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/TFLR18B5meuEXcgLA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Asle2;
