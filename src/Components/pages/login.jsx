import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React ,{ useState }from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'
import '../style/login.css'
import bgLogin from '../../assets/Group 291.png'
import Lock from '../../assets/Lock.png'
import Email from '../../assets/Email.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:1000/login',{
                email: email,
                password: password,
            });
            navigate("/beranda");
            window.location.reload();
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        
      <div class="backgroundlo">

<section class="main">
    <div class ="ukuran">
        <div class="kiri">
            <div class="logologin">               
                <img src="rsa 5.png" alt=""/>
            </div>
            
        
            <div >
                <h1>Sugeng Rawuh</h1>
                <h3>Silahkan Masuk Akun Kamu Sekarang</h3>


                <form onSubmit={ Auth }>
                <p>{msg}</p>
                <div class="input-text1">
                    <input type="text" placeholder="Email" 
                    value={email} onChange={(e) =>
                     setEmail(e.target.value)}/>
                    <Image src={Email} />
                    <i class="fas fa-envelope email-icon"></i>
                </div>
                <div class="input-text2">
                    <input type="password" style={{border:"none"}} placeholder="Passsword"
                    value={password} onChange={(e) =>
                     setPassword(e.target.value)}/>
                    <Image src={Lock} />
                    <i class="fas fa-lock password-icon"></i>
                </div>

                    
                <div class="footer-form">
                    <div> 
                        
                          
                    <p class="daftar">Belum punya akun?
                    <a href="register"><p2><span> Daftar</span></p2> </a> </p>
                     </div>

                    <div>
                        {/* <a link="">
                        <p3>Lupa Passsword?</p3>
                        </a> */}
                    </div>
                </div>
                
                <button> Masuk </button>
                
                </form>
                <div class="line-atau">
                    <div class="line"> </div>
                    
                    <div class="line"></div>
                </div>
                
            </div>
        </div>
        </div>
        <div class="kanan1">
            <Image src={bgLogin} />
            
        </div>
    </section>



</div>

    )
}

export default Login;

