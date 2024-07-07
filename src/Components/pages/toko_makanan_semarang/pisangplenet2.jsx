import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/pisangplenet2.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/pisangplenet2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const PisangPlenet2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/pisangplenet/33">
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
                          <h2>Pisang Plenet Pak Subandi</h2>
                          <p> 4.4⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Pemuda No.33, Pandansari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>-</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/hMbM8e3iPnc4aZTK7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default PisangPlenet2;
