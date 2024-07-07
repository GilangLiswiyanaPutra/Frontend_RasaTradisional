import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/sosis2.png'
import Tokoimg from '../../../assets/toko_makanan_solo/sosis2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Sosis_Solo2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/sosissolo/17">
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
                          <h2>Sosis Solo Pojok Beteng</h2>
                          <p> 4.9⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Reksoniten No.34, Gajahan, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57115</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>085826108075</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@sosis_pojokbeteng</p>
                    <a href="https://maps.app.goo.gl/8cAmfUzwUFUHZoxf8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Sosis_Solo2;
