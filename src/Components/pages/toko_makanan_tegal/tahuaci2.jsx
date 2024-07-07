import React from 'react';
import Map from '../../../assets/toko_makanan_tegal/map/tahuaci2.png'
import Tokoimg from '../../../assets/toko_makanan_tegal/tahuaci2.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const TahuAci2 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/tahuaci/5">
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
                          <h2>Tahu Murni Banjaran Hj. Siti Rochmah</h2>
                          <p> 4.6⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Jl. Raya Utara Adiwerna No.48, Pedologan, Tembok Banjaran, Kec. Adiwerna, Kabupaten Tegal, Jawa Tengah 52194</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0283443211</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/VTgB996PfMyeXDgv7" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default TahuAci2;
