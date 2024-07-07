import{Card, Container,Row,Col,Image} from "react-bootstrap"

import star from '../../../assets/tegal/makanan/olos/star.png'

import tehpociFoto from '../../../assets/tegal/minuman/tehpoci/tehpoci.png'
import tehpociFoto2 from '../../../assets/tegal/minuman/tehpoci/tehpoci2.png'
import tehpociToko1 from '../../../assets/tegal/minuman/tehpoci/toko1.png'
import tehpociToko2 from '../../../assets/tegal/minuman/tehpoci/toko2.png'
import pociOlos1 from '../../../assets/tegal/makanan/orang1.png'

import rating from '../../../assets/tegal/makanan/olos/rating.png'

import '../../style/menusolo.css'
import '../../style/tegal.css'
import Footer from "../../navigation/footer"
import Back from '../../../assets/back.png'

import '../../style/olos.css'

import background1 from '../../../assets/motif1.png'
import background2 from '../../../assets/motif2.png'

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../style/bintang.css";
import gambarbintang from "../../../assets/123.jpg";

const Tehpoci = () => {
  const { id } = useParams();
  const [Komen, SetKomen] = useState([]);

  useEffect(() => {
    buatKomen();
    getKomenByMakanan(id);
  }, [id]);

  const getKomenByMakanan = async (id) => {
    try {
      const response = await axios.get(`http://localhost:1000/makanan/${id}`);
      SetKomen(response.data);
    } catch (error) {}
  };

  const [namakomen, setNamaKomen] = useState("");
  const [pendapat, setPendapat] = useState("");

  const buatKomen = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1000/komen", {
        namakomen,
        pendapat,
        idmakanan: id,
      });
      res.json({ msg: "Komen Berhasil" });
      getKomenByMakanan(id);
      setNamaKomen("");
      setPendapat("");
    } catch (erorr) {
      console.log(error);
    }
  };

  return (
      
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
       <a  href="">
       <button class="back-button2">
    <Image src={Back} />
  </button>
  </a>

  
      
       <div className="imgHead3" style={{ backgroundImage: `url(${background1})` }}>
       <Image className="imgHead3" src={tehpociFoto} />
      </div>
      <div class="description">
        <section>
          <div class="judul">
            <h1>Teh Poci</h1>
            <Image  src={star} />
         
            
          </div>
          <p>Teh Poci Tegal adalah minuman tradisional yang sangat populer di Tegal, Jawa Tengah, Indonesia. 
            Seperti namanya, Teh Poci disajikan menggunakan teko tanah liat yang disebut "poci", memberikan minuman ini sentuhan khas dari budaya lokal.</p>
 
        </section>
       
        <section class="penyajian">
          <div>
          <Image src={tehpociFoto2} />
            
          </div>
          <div>
            <h1>Penyajian</h1>
            <p>Proses pembuatan Teh Poci dimulai dengan merebus air hingga mendidih dalam panci atau ketel. Setelah itu, daun teh berkualitas baik, seringkali berupa campuran dari teh hitam dan teh hijau, ditambahkan ke dalam poci. 
                Kemudian, air panas yang mendidih dituangkan ke dalam poci, dan daun teh diseduh dengan sempurna di dalam teko tanah liat tersebut.</p>
          </div>
        </section>
        
        <section class="tersedia">
          <h1>Tersedia di Toko berikut</h1>
          <br/><div>
          <div class="imgTersedia2">
            
            
           
            <Image  src={tehpociToko1} />
            
            
            <Image  src={tehpociToko2} /> 
            </div>
            <br/><br/>
            <h1>Komentar</h1>
         
           
           </div>
        </section>
        <br/><br/>
        <br/>
        <br/>

        
      </div>
      <br></br>
        <br></br>
        <br></br>

      <div className="comment" style={{ backgroundImage: `url(${background2})` }}>

      
      {Komen.map((item) => (
        <div class="cards">
          <div class="card">
            
          
            <div class="info">
              <div class="name">
                <Image src={rujakteplakOrang1} />

                <div>
                  <h2>{item && item.namakomen}</h2>
                  <h3>{item && item.pendapat}</h3>
                </div>
              </div>
            </div>
            {/* <div class="rating">★★★★☆</div> */}
          </div>
        </div>
      ))}
   
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div></div>
      <div class="ulasan">
        <h1>Berikan Pendapatmu</h1>
        <div>
          <Image src={rating} />
        </div>

        <form onSubmit={buatKomen}>
          <div class="form-group">
            <label for="nama">Nama : </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={namakomen}
              onChange={(e) => setNamaKomen(e.target.value)}
            ></input>
          </div>
          <div class="form-group">
            <label for="pendapat">Pendapatmu : </label>
            <input
              type="text"
              name="pendapat"
              id="pendapat"
              value={pendapat}
              onChange={(e) => setPendapat(e.target.value)}
            ></input>
          </div>

          <div class="button-container">
            <button class="submit-btn">Kirim</button>
            <button class="enter-btn">Batal</button>
          </div>
        </form>
        <div>
          {Komen.map((item) => (
            <div>
              {item && item.namakomen}
              {item && item.pendapat}
            </div>
          ))}
          {/* {Komen && Komen.namakomen} 
  <br></br>
  {Komen && Komen.pendapat} */}
        </div>
      </div>
    </div>
  );
};


export default Tehpoci;

