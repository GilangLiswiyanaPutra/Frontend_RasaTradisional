import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
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

const Menu = () => {
    return (
      <div class="background">
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 

<div>
        <h1 className="nama">Daftar Makanan</h1>
        <h4 className="nama">Temukan makanan yang kamu cari </h4>
        <br/>

        <br/>
</div>
<div className="tengah">

<div className="imgHead" style={{ backgroundImage: `url(${background1})`, 
}}> 


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

<div className="tengah">


<a  href="/wingkobabat/31">
<Menusemarangbahan5 />
</a>

<a  href="/lontongspekoek/32" > 
<Menusemarangbahan6 />
</a>

<a  href="/pisangplenet/33">
<Menusemarangbahan7 />
</a>
</div>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1 className="nama">Daftar Minuman</h1>
        <h4 className="nama">Temukan minuman yang kamu cari </h4>
        <br/>

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
<a  href="/tehpoci/12">
<Menutegalbahan12 />
</a>
</div>

<div className="imgHead" style={{ backgroundImage: `url(${background2})`, 
}}> 

<div className="tengah">
<a  href="/eskrimbatok/13">
<Menutegalbahan13 />
</a>
<a  href="/dongo/22">
<Menusolobahan9 />
</a>
<a  href="/dawet/23">
<Menusolobahan10 />
</a>
<a  href="/asle/25">
<Menusolobahan11 />
</a>

</div>

       </div>
       
<div className="tengah">
< a href="/gempol/26">
<Menusolobahan12 />
</a>
< a href="/kapal/24">
<Menusolobahan14 />
</a>

<a  href="/esputer/34"> 
<Menusemarangbahan8 />
</a>
<a  href="/wedangtahu/35">
<Menusemarangbahan9 />
</a>
</div>



 <div className="tengah">
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


</div>

    )
}

export default Menu;

