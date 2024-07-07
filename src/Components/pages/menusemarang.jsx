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

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const Menusemarang = () => {
    return (
      <div class="background">
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 

<div>
        <h1 className="nama">Daftar Makanan Kota Semarang </h1>
        <h4 className="nama">Temukan makanan yang kamu cari </h4>
        <br/>

        <br/>
</div>
<div className="imgHead" style={{ backgroundImage: `url(${background1})`, 
}}> 
<div className="tengah">

<a  href="/lumpia/27">
<Menusemarangbahan1 />
</a>

<a  href="/sotobangkong/29">
<Menusemarangbahan2 />
</a>

<a  href="/tahugimbal/29">
<Menusemarangbahan3 />
</a>

<a  href="/miekopyak/30">
<Menusemarangbahan4 />
</a>
</div>
</div>
<div className="tengah">

<a  href="/wingkobabat/31">
<Menusemarangbahan5 />
</a>
<a  href="/lontongspekoek/32">
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
<h1 className="nama">Daftar Minuman Kota Semarang </h1>
        <h4 className="nama">Temukan minuman yang kamu cari </h4>
        <br/>

        <div className="imgHead" style={{ backgroundImage: `url(${background2})`, 
}}> 
 <div className="tengah">

 <a  href="/esputer/34"> 
<Menusemarangbahan8 />
</a>
<a  href="/wedangtahu/35">
<Menusemarangbahan9 />
</a>
<a  href="/wedangkacangtanah/36">
<Menusemarangbahan10 />
</a>

<a  href="/escao/37">
<Menusemarangbahan11 />
</a>
</div>
</div>


<div className="tengah">

     
<a  href="/esmarem/38">   
<Menusemarangbahan12 />
</a>
</div>





</div>


</div>

    )
}

export default Menusemarang;

