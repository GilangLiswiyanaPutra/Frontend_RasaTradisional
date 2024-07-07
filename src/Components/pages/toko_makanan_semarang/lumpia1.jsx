import React from 'react';
import Map from '../../../assets/toko_makanan_semarang/map/lumpia1.png'
import Tokoimg from '../../../assets/toko_makanan_semarang/lumpia1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const Lumpia1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/lumpia/27">
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
                          <h2>Loenpia Mbak Lien</h2>
                          <p> 4.5⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Gg. Grajen Jl. Pemuda No.1, Pandansari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50138</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>0816664952</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>@loenpiambalien_</p>
                    <a href="https://maps.app.goo.gl/gHzRYHdGcbxJW1sz9" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default Lumpia1;
