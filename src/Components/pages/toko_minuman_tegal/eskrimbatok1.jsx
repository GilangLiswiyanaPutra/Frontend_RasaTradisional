import React from 'react';
import Map from '../../../assets/toko_minuman_tegal/map/eskrimbatok1.png'
import Tokoimg from '../../../assets/toko_minuman_tegal/eskrimbatok1.png'
import Back from '../../../assets/back.png'


import '../../style/toko.css'

const esKrimBatok1 = () => {
  return (
    <section id="toko">
        <div className='back'>
          <a href="/eskrimbatok/13">
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
                          <h2>ES KRIM BATOK DAN MIE ACEH "GALAWI"</h2>
                          <p> 4.3⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <h3 className="addres-toko">Alamat</h3>
                    <p>Sebelah selatan SMA N 1 slawi, yang ada MIE ACEH galawinya, Kalijembangan, Pakembaran, Kec. Slawi, Kabupaten Tegal, Jawa Tengah 52415</p>
                    <h1 className="info-toko">Kontak</h1>
                    <p>082326097128</p>
                    <h1 className="info-toko">Sosial Media</h1>
                    <p>-</p>
                    <a href="https://maps.app.goo.gl/F9UXzwDvgxMdpVYs6" target="_blank" rel="noopener noreferrer"><button>Mulai Navigasi</button></a>
                </div>
               
            </div>
        </section>
  );
};

export default esKrimBatok1;
