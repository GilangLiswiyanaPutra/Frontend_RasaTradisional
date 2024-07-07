import React from 'react';
import Map from '../../../assets/toko_minuman_semarang/map/esputer1.png'
import Tokoimg from '../../../assets/toko_minuman_semarang/esputer1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const EsPuter1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/esputer/34">
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
                          <h2>Es Puter Cong Lik</h2>
                          <p> 4.3⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Kh Ahmad Dahlan No.11, Karangkidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0248443619</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@esputerconglik1970</p>
                    <a href="https://maps.app.goo.gl/XYheKVWn5iRsQwqb8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default EsPuter1;
