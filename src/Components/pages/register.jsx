import{Card, Container,Row,Col,Image} from "react-bootstrap"
import '../style/menusolo.css'
import React,{ useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import sateBuntel from '../../assets/solo/satebuntel.png'
import '../style/register.css'
import bgLogin from '../../assets/Group 291.png'
import Lock from '../../assets/Lock.png'
import Email from '../../assets/Email.png'
import Nama from '../../assets/Nama.png'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleRegister = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:1000/users',{
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/login");
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
                <h3>Silahkan Daftar Akun Kamu Sekarang</h3>

                <form onSubmit={ handleRegister }>
                <p>{msg}</p>

                <div class="input-text1">
                    <input type="text" placeholder="Nama"
                    value={name} onChange={(e) => setName(e.target.value)}/>

                    <Image src={Nama} />
                    <i class="fas fa-envelope email-icon"></i>
                </div>
                <div class="input-text1">
                    <input type="text" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Image src={Email} />
                    <i class="fas fa-envelope email-icon"></i>
                </div>
                <div class="input-text1">
                    <input type="password" style={{border:"none"}} placeholder="Passsword"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Image src={Lock} />
                    <i class="fas fa-lock password-icon"></i>
                </div>
                <div class="input-text1">
                    <input type="password" style={{border:"none"}} placeholder="Confirm Passsword"
                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                    <Image src={Lock} />
                    <i class="fas fa-lock password-icon"></i>
                </div>
                
                    
                <div class="footer-form">
                    <div> 
                        
                          
                    <p class="daftar2">Sudah punya akun?
                    <a href="login"><p2><span> Masuk</span></p2> </a> </p>
                     </div>

                  
                </div>

                <button> Daftar </button>
                <div class="line-atau">
                    <div class="line"> </div>
                    
                    <div class="line"></div>
                </div>
                </form>
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

export default Register;

