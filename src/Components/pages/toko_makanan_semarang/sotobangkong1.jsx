import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/lumpia2.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/lumpia2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const SotoBangkong1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/sotobangkong/28">
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
                          <h2>Soto Bangkong</h2>
                          <p> 4.3⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Ruko Bangkong Plaza, Jl. Brigjen Katamso No.1, Peterongan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50242</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0248412842</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@sotobangkong</p>
                    <a href="https://maps.app.goo.gl/RFPCmCx475cnr4d39" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default SotoBangkong1;
