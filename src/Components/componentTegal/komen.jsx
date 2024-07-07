import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'
import orang1 from '../../assets/tegal/toko/orang1.png'
import '../style/komen.css'


const Komen = () => {

    return (

        // <div class="comment">
        //     <div class="slider-container">  
        //     <div class="cars">
        //     <div class="card">
        //     <div class="review">ENAK BANGET!!!</div>
        //     <hr></hr>
            
        //     {/* <div class="info">
        //         <div class="name">
        //         <Image src={orang1} />
                
        //         <div class="name2">
        //             <h2>Neng Karina</h2>
        //             <h3>Pacarnya Siapaa</h3>
        //           </div>
        //           </div>
            
        //           <div class="rating">
        //           ★★★★☆
                  
        //           <p>20 weeks ago</p>
        //           </div> */}
        //         {/* </div> */}

                <div class="box">
        <div class="box2">

        </div><div class="box3">
            <span class="nma1">Neng karina</span>
            <span class="nma2">Pacarnya siapaa</span>
            <span class="rating1"></span>
                  ★★★★☆
            <div class="nma3"></div>
     
            <span class="men1">20 weeks ago</span>
        </div><span class="men2">ENAK BANGET!!!</span>
        <div class="name"></div>
        </div>
        


                

       


    );
};


export default Komen;


