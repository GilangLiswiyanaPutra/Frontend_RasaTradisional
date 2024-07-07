import React from 'react'
import Kota1 from '../../assets/semarang.png'
import Kota2 from '../../assets/solo.png'
import Kota3 from '../../assets/tegal.png'

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'




import '../style/lokasi.css'
// import Arrow from '../../assets/down.png'

const images = [Kota1, Kota2, Kota3];
const links = ['semarang', 'solo', 'tegal'];

const Lokasi = () => {
  return (
    
    <section id='lokasi'>
     
      <div className='title'>
        <h1>Daftar Lokasi</h1>
      </div>
      
      <div className='title-p'>
        
        <p className='lokasi-p'>Jelajahi Makanan Khas Daerah yang Kamu Cari</p>
      </div>
      
      <div className='prov'>
        <h2>Jawa Tengah</h2>
        {/* <img src={Arrow} alt="" /> */}
      </div>
      <div className="imgHead" style={{ backgroundImage: `url(${background2})`, 
}}> 
      <div className="place-img">
            <div className='scroll-img'>
                {images.map((image, index) => (
                    <a key={index} href={links[index]} rel="noopener noreferrer">
                        <img src={image} alt={`Image ${index}`} />
                    </a>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Lokasi;
