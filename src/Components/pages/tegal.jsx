import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import '../style/tegal.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'


import Menutegalbahan1 from "../componentTegal/menutegalbahan1";
import Menutegalbahan2 from "../componentTegal/menutegalbahan2";
import Menutegalbahan3 from "../componentTegal/menutegalbahan3";
import Menutegalbahan4 from "../componentTegal/menutegalbahan4";
import Menutegalbahan5 from "../componentTegal/menutegalbahan5";
import Menutegalbahan6 from "../componentTegal/menutegalbahan6";
import Menutegalbahan7 from "../componentTegal/menutegalbahan7";
import Menutegalbahan8 from "../componentTegal/menutegalbahan8";
import Menutegalbahan9 from "../componentTegal/menutegalbahan9";
import Menutegalbahan10 from "../componentTegal/menutegalbahan10";
import Menutegalbahan11 from "../componentTegal/menutegalbahan11";
import Menutegalbahan12 from "../componentTegal/menutegalbahan12";
import Menutegalbahan13 from "../componentTegal/menutegalbahan13";
import fotoTegal from '../../assets/tegal/fototegal.png'
import Back from '../../assets/back.png'


import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const Tegal = () => {
    return (
      <div class="background">
        
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
       
       
       
       <a  href="beranda">
       <button class="back-button4">
    <Image className="" src={Back} />
  </button>
  </a>
        {/* <img src="../../assets/tegal/fototegal.png" alt=""></img> */}
        <div className="imgHead" style={{ backgroundImage: `url(${background1})` }}>
       <Image className="gambartegal1" src={fotoTegal} />
       </div>

       <br/> <br/> 
       
       <h4 class="deskripsitegal">Kota Tegal terkenal dengan industri perikanan dan kelautannya yang 
       berkembang pesat, sehingga makanan laut <br/>menjadi salah satu kekhasan
        kuliner di sana. Salah satu makanan laut yang sangat populer adalah
         "Mie Lendir". <br/>Jika Anda berkunjung ke Tegal, jangan lupa untuk 
         mencicipi kekayaan kuliner yang ditawarkan oleh kota ini.
         </h4>

       

       
         <br/> <br/> <br/> <br/> 
         
         <br/> <br/>
         <hr></hr>
         <br/> <br/> <br/> 
        

  
  
     
 
 
</div>

<div>
        <h1 className="nama">Makanan</h1>
        <h4 className="nama">Temukan makanan yang kamu cari </h4>
        <br/>

        <br/>
</div>
<div className="tengah">
<a href="/rujakteplak/1">
<Menutegalbahan1 />
</a>
<a href="/kupatglabed/2">
<Menutegalbahan2 />
</a>
<a href="/kupatblengong/3">
<Menutegalbahan3 />
</a>
<a href="/glotak/4">
<Menutegalbahan4 />
</a>
</div>
<br /><br /><br /><br />
<a  href="menutegal">
<button class="buttonlainnya">Lainnya</button>
</a>


<br/>
<br/>
<br/>
<hr></hr>
<br/>
<br/>
<br/>
<h1 className="nama">Minuman</h1>
        <h4 className="nama">Temukan minuman yang kamu cari </h4>
        <br/>

        <div className="imgHead" style={{ backgroundImage: `url(${background2})` }}>

 <div className="tengah">
 <a href="/eslontrong/9">
<Menutegalbahan9 />
</a>
<a href="/esdawetberas/10">
<Menutegalbahan10 />
</a>
<a href="/essagwan/11">
<Menutegalbahan11 />
</a>
<a href="/eskrimbatok/13">
<Menutegalbahan13 />
</a>
</div>
</div>

<br /><br /><br /><br />
<a  href="menutegal">
<button class="buttonlainnya">Lainnya</button>
</a>




</div>




    )
}

export default Tegal;

