import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'

import Menusolobahan9 from "../componentSolo/menusolobahan9";
import Menusolobahan10 from "../componentSolo/menusolobahan10";
import Menusolobahan11 from "../componentSolo/menusolobahan11";
import Menusolobahan12 from "../componentSolo/menusolobahan12";
import Menusolobahan13 from "../componentSolo/menusolobahan13";
import Menusolobahan14 from "../componentSolo/menusolobahan14";


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

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const Menutegal = () => {
    return (
      <div class="background">
         
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 

<div>
        <h1 className="nama">Daftar Makanan Kota Tegal </h1>
        <h4 className="nama">Temukan makanan yang kamu cari </h4>
        <br/>

        <br/>
</div>

<div className="imgHead" style={{ backgroundImage: `url(${background1})`, 
}}> 

<div className="tengah">
<a  href="/rujakteplak/1">
<Menutegalbahan1 />
</a>
<a  href="/kupatglabed/2">
<Menutegalbahan2 />
</a>
<a  href="/kupatblengong/3">
<Menutegalbahan3 />
</a>
<a  href="/glotak/4">
<Menutegalbahan4 />
</a>
</div>

</div>

<div className="tengah">
<a  href="/tahuaci/5">
<Menutegalbahan5 />
</a>
<a  href="/kemronyos/6">
<Menutegalbahan6 />
</a>
<a  href="/sototauco/7">
<Menutegalbahan7 />
</a>
<a  href="/olos/8">
<Menutegalbahan8 />
</a>
</div>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1 className="nama">Daftar Minuman Kota Tegal </h1>
        <h4 className="nama">Temukan minuman yang kamu cari </h4>
        <br/>

        <div className="imgHead" style={{ backgroundImage: `url(${background2})`, 
}}> 

 <div className="tengah">
 <a  href="/eslontrong/9">
<Menutegalbahan9 />
</a>
<a  href="/esdawetberas/10">
<Menutegalbahan10 />
</a>
<a  href="/essagwan/11">
<Menutegalbahan11 />
</a>
<a  href="/eskrimbatok/13">
<Menutegalbahan13 />
</a>
</div>


</div>
<div className="tengah">

</div>



</div>


</div>

    )
}

export default Menutegal;

