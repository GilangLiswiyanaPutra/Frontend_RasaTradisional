import React from 'react';
import Map from '../../../assets/toko_makanan_solo/map/buntel1.png'
import Tokoimg from '../../../assets/toko_makanan_solo/buntel1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Sate_Buntel1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/satebuntel/14">
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
                          <h2>Sate Buntel Badran</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Kenanga No.59, Badran, Purwosari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57142</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>082289587777</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@satebuntel_badran</p>
                    <a href="https://maps.app.goo.gl/8ALnN8ASC51eVYgDA" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Sate_Buntel1;
