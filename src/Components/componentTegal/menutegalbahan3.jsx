import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'
import kupatBlengong from '../../assets/tegal/kupatblengong.png'
import kanan from '../../assets/panahkanan.png'

const Menutegalbahan3 = () => {

    return (
<div class="buatjarakkanan">
<div class="div">
<div class="div-2">
  <Image className="img"src={kupatBlengong} />
  
<div class="div-3">
<div class="div-4">
        <div class="div-5">Kupat Blengong</div>
        <div class="div-6">Tegal</div>
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


export default Menutegalbahan3;


