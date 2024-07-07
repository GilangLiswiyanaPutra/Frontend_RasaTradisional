import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/selat1.png'
import Tokoimg from '../../../assets/toko_makanan_solo/selat1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Selat_Solo1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/selatsolo/20">
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
                          <h2>Selat Solo Tenda Biru - Dr. Wahidin</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Dr. Wahidin No.26, Purwosari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57142</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>082136659775</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@tendabiru_solo</p>
                    <a href="https://maps.app.goo.gl/5bq2B7jyAZGzBYWJA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Selat_Solo1;
