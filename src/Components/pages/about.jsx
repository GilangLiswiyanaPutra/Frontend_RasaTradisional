import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/about.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About1 from '../../assets/aboutus1.png'
import About2 from '../../assets/aboutus2.png'
import About3 from '../../assets/aboutus3.png'
import About4 from '../../assets/aboutus4.png'
import About5 from '../../assets/aboutus5.png'
import About6 from '../../assets/aboutus6.png'
import About7 from '../../assets/aboutus7.png'
import About8 from '../../assets/aboutus8.png'

import background1 from '../../assets/motif1.png'
import background2 from '../../assets/motif2.png'

const About = () => {
    return (
    
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 


       <Image className="about2" src={About2} />
<div className="imgHead" style={{ backgroundImage: `url(${background1})`, 
}}> 
<div className="tlisan1">

    <div className="tlisan2">
<h1>
Hai!<br />
Kami<br />
Mapalus Unity </h1>
<br />
<p>Kami adalah sekelompok orang yang <br />
optimis dan penuh rasa syukur yang berasal <br />
dari Indonesia dan berdedikasi untuk <br />
menciptakan produk yang dapat berguna<br />
 dan disukai oleh masysarakat.</p>
 </div>
<Image className="about1" src={About1} />

</div>
</div>
<br />
<br />
<br />


<div className="tlisan3">
<Image className="about3" src={About3} />
<div className="tlisan4">
<h1>Cerita Kami </h1>
<br />
<p>Mapalus Unity dimulai sebagai tim proyek Massive Challege pada <br />
    bulan April 2024
untuk menyelesaikan Studi Independen di Infinite <br />
Learning
 — Mapalus Unity kemudian mengangkat tema mengenai <br />
 makanan dan minuman tradisional dalam challenge ini<br />
karena dirasa menarik dan dapat berguna untuk masyarakat<br />
 sekitar, dan terciptalah RasaTradisional sebuah website yang <br />
 menampilkan makanan dan minuman tradisional khas daerah-<br />
 daerah di Indonesia.
</p>
 </div>

</div>



<br/> <br/> <br/> <br/> <br/> <br/> <br/> 
<div className="imgHead" style={{ backgroundImage: `url(${background2})`, 
}}> 

<div className="tlisan5">
<div className="tlisan6">
<h1>
Project kami
 </h1>
<br />
<p>RasaTradisional adalah produk yang dibuat untuk membantu <br />
masyarakat, dan mendorong masyarakat untuk menghargai dan<br />
 mencoba makanan tradisional sebagai bagian dari identitas<br />
  budaya Indonesia.
Serta mempromosikan keberagaman kuliner <br />
Indonesia dengan memperkenalkan makanan tradisional dari <br />
setiap daerah di Indonesia, dari Sabang sampai Merauke.
</p>
 </div>
<Image className="about4" src={About4} />
</div>



 </div>
 <br/> <br/>
 <div className="tlisan9">
 <div className="tlisan7">
<h1>
Visi
 </h1>
<br />
<p>Menjadi penyedia informasi dan inspirasi tentang makanan<br />
 tradisional dari berbagai daerah di Indonesia, <br />
 mempromosikan kekayaan budaya kuliner Indonesia <br />
 kepada masyarakat lokal dan global melalui media internet
</p>
 </div>

 <div className="tlisan8">
<h1>
Misi
 </h1>
<br />
<p>Rasa Tradisional merupakan website yang menyediakan <br />
segala informasi terkait makanan tradisonal di suatu daerah <br />
yang mungkin belum kamu tahu.
</p>
 
</div>

       </div>
       <br /><br /><br />
        <div className="follow">
       <h1>Follow Us</h1>
       </div>
       <div className="follow2">
       <a href="">
       <Image className="about5" src={About5} />
       </a>
       <a href="">
       <Image className="about6" src={About6} />
       </a>
       <a href="">
       <Image className="about7" src={About7} />
       </a>
       <a href="">
       <Image className="about8" src={About8} />
       </a>
       </div>
       </div>




    )
}

export default About;

