import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import '../style/tegal.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'


import Menusemarangbahan1 from "../componentSemarang/menusemarangbahan1";
import Menusemarangbahan2 from "../componentSemarang/menusemarangbahan2";
import Menusemarangbahan3 from "../componentSemarang/menusemarangbahan3";
import Menusemarangbahan4 from "../componentSemarang/menusemarangbahan4";
import Menusemarangbahan5 from "../componentSemarang/menusemarangbahan5";
import Menusemarangbahan6 from "../componentSemarang/menusemarangbahan6";
import Menusemarangbahan7 from "../componentSemarang/menusemarangbahan7";
import Menusemarangbahan8 from "../componentSemarang/menusemarangbahan8";
import Menusemarangbahan9 from "../componentSemarang/menusemarangbahan9";
import Menusemarangbahan10 from "../componentSemarang/menusemarangbahan10";
import Menusemarangbahan11 from "../componentSemarang/menusemarangbahan11";
import Menusemarangbahan12 from "../componentSemarang/menusemarangbahan12";



import fotoSemarang from '../../assets/semarang/fotosemarang.png'
import Back from '../../assets/back.png'

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const Semarang = () => {
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
       <Image className="gambarsolo" src={fotoSemarang} />
       </div>


       <br/> <br/> 
       
       <h4 class="deskripsitegal">Surga kuliner di tepi laut, itulah Semarang, kota 
       yang gemerlap dengan sebutan 'Kota Lumpia' yang terkenal<br/>  dengan kelezatan 
       lumpia serta 'Kota Udang' yang menawarkan udang segar dan lezat. Makanan 
       tradisional<br/> Semarang mencerminkan kekayaan budaya dan sejarah kota, 
       dengan cita rasa yang unik dan beragam. Salah <br/> satu makanan khas Semarang 
       yang terkenal adalah "Tahu Pong", tahu yang digoreng hingga renyah 
       dan diisi <br/> dengan adonan yang gurih dan bumbu khas
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
<a  href="/lumpia/27">
<Menusemarangbahan1 />
</a>

<a  href="/sotobangkong/28">
<Menusemarangbahan2 />
</a>

<a  href="/tahugimbal/29">
<Menusemarangbahan3 />
</a>

<a  href="/miekopyak/30">
<Menusemarangbahan4 />
</a>
</div>
<br /><br /><br /><br />
<a  href="menusemarang">
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

 <a  href="/wedangtahu/35">
<Menusemarangbahan9 />
</a>

<a  href="/wedangkacangtanah/36">
<Menusemarangbahan10 />
</a>

<a  href="/escao/37">
<Menusemarangbahan11 />
</a>

<a  href="/esmarem/38">
<Menusemarangbahan12 />
</a>

</div>
</div>
<br /><br /><br /><br />
<a  href="menusemarang">
<button class="buttonlainnya">Lainnya</button>
</a>




</div>




    )
}

export default Semarang;

