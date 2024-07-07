import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'
import kanan from '../../assets/panahkanan.png'



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

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const Menusolo = () => {
    return (
      <div class="background">
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 

<div>
        <h1 className="nama">Daftar Makanan Kota Solo </h1>
        <h4 className="nama">Temukan makanan yang kamu cari </h4>
        <br/>

        <br/>
</div>
<div className="imgHead" style={{ backgroundImage: `url(${background1})`, 
}}> 
<div className="tengah">
<a  href="/satebuntel/214">
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

</div>

<div className="tengah">
<a  href="/tahukupat/18">
<Menusolobahan5/>
</a>
<a  href="/lenjongan/19">
<Menusolobahan6/>
</a>
<a  href="/selatsolo/20">
<Menusolobahan7/>
</a>
<a  href="/serabi/21">
<Menusolobahan8/>
</a>
</div>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1 className="nama">Daftar Minuman Kota Solo </h1>
        <h4 className="nama">Temukan minuman yang kamu cari </h4>
        <br/>


        <div className="imgHead" style={{ backgroundImage: `url(${background2})`, 
}}> 


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
< a href="/gempol/26">
<Menusolobahan12 />
</a>
</div>

</div>

<div className="tengah">

< a href="/kapal/24">
<Menusolobahan14 />
</a>
</div>


</div>


</div>

    )
}

export default Menusolo;

