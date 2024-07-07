import React from 'react';
import Map from '../../../assets/toko_minuman_semarang/map/wedangkacangtanah1.png'
import Tokoimg from '../../../assets/toko_minuman_semarang/wedangkacangtanah1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const WedangKacangTanah1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/wedangkacangtanah/36">
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
                          <h2>Wedang Kacang Tanah &Kacang Ijo</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Kedungmundu, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50276</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/uWAn233sciCxTuQR8" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default WedangKacangTanah1;
