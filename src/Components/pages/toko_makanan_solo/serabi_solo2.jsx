import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/serabi2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/serabi2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Serabi_Solo2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/serabi/21">
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
                          <h2>Srabi Notosuman Ny. Handayani</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Moh. Yamin No.51, Kratonan, Kec. Serengan, Kota Surakarta, Jawa Tengah 57153</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0271655906</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@srabinotosuman</p>
                    <a href="https://maps.app.goo.gl/zUKqxamFNyVakWRF6" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Serabi_Solo2;
