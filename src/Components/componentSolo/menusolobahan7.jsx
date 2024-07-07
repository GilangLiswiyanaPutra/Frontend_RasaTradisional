import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'
import nasiLiwet from '../../assets/solo/nasiliwet.png'
import kanan from '../../assets/panahkanan.png'
import selatSolo from '../../assets/solo/selatsolo.png'



const Menusolobahan7 = () => {

    return (
<div class="buatjarakkanan">
<div class="div">
<div class="div-2">
  <Image className="img"src={selatSolo} />
  
<div class="div-3">
<div class="div-4">
        <div class="div-5">Selat Solo</div>
        <div class="div-6">Solo</div>
</div>
     <a href="#">
      <Image className="img-2" src={kanan} />
      </a>
      
      
</div>
</div>
</div>


</div>



    );
};


export default Menusolobahan7;


