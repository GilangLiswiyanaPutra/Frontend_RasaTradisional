import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import '../style/tegal.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'


import Menusolobahan2 from "../componentSolo/menusolobahan2";
import Menusolobahan1 from "../componentSolo/menusolobahan1";
import Menusolobahan3 from "../componentSolo/menusolobahan3";
import Menusolobahan4 from "../componentSolo/menusolobahan4";
import Menusolobahan5 from "../componentSolo/menusolobahan5";
import Menusolobahan6 from "../componentSolo/menusolobahan6";
import Menusolobahan7 from "../componentSolo/menusolobahan7";
import Menusolobahan8 from "../componentSolo/menusolobahan8";
import Menusolobahan9 from "../componentSolo/menusolobahan9";
import Menusolobahan10 from "../componentSolo/menusolobahan10";
import Menusolobahan11 from "../componentSolo/menusolobahan11";
import Menusolobahan12 from "../componentSolo/menusolobahan12";
import Menusolobahan13 from "../componentSolo/menusolobahan13";
import Menusolobahan14 from "../componentSolo/menusolobahan14";



import fotoSolo from '../../assets/solo/fotosolo.png'
import Back from '../../assets/back.png'

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const Solo = () => {
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
       <Image className="gambarsolo" src={fotoSolo} />
       </div>

       <br/> <br/> 
       
       <h4 class="deskripsitegal">Kota Solo, atau Surakarta, merupakan kota yang kaya akan budaya
        dan warisan kuliner tradisional Jawa. Makanan<br/>  tradisional di Solo tidak 
        hanya mencerminkan cita rasa yang khas, tetapi juga menjadi bagian integral 
        dari <br/> identitas budaya dan sejarah kota. Nasi Liwet dan Nasi Gudeg adalah dua 
        dari banyak makanan khas Solo yang<br/>  menonjol.
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
<a  href="/satebuntel/14">
<Menusolobahan1 />
</a>
<a  href="/nasiliwet/15">
<Menusolobahan2 />
</a>
<a  href="/timlo/16">
<Menusolobahan3 />
</a>
<a  href="/sosissolo/17">
<Menusolobahan4 />
</a>
</div>
<br /><br /><br /><br />
<a  href="menusolo">
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
 <a  href="/dongo/22">
<Menusolobahan9 />
</a>
<a  href="/dawet/23">
<Menusolobahan10 />
</a>
<a  href="/asle/25">
<Menusolobahan11 />
</a>
<a  href="/gempol/26">
<Menusolobahan12 />
</a>
</div>
</div>

<br /><br /><br /><br />
<a  href="menusolo">
<button class="buttonlainnya">Lainnya</button>
</a>




</div>




    )
}

export default Solo;

