// import React, { useState, useEffect, useContext } from 'react';
// import logo from '../../assets/logo.png';
// import { useNavigate,Link } from 'react-router-dom';
// import { LuUser2 } from "react-icons/lu";
// import { FaUserLarge } from "react-icons/fa6";
// import { RiLogoutBoxRLine } from "react-icons/ri";
// import '../style/navigation.css';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';


// // const [name, setName] = useState('');

// const Navbar = () => {

  

//   const [name, setName] = useState('');
//   const [token, setToken] = useState('');
//   const [expire, setExpire] = useState('');

//     const navigate = useNavigate();

//     const Logout = async() =>{
//       try {
//           await axios.delete('http://localhost:1000/logout');
//           navigate("/login");
//           window.location.reload();
//       } catch (error) {
//           console.log(error)
//     }
  
//     }

//     const [users, setUser] = useState([]);

//     useEffect(() => {
//       getUsers();
//     }, []);
  
//     const getUsers = async () => {
//       const response = await axios.get("http://localhost:1000/users");
//       setUser(response.data);



//     };

//     useEffect(() => {
//       refreshToken();
//   }, []);

//     const refreshToken = async() => {
//       try {
//           const response = await axios.get('http://localhost:1000/token');
//           setToken(response.data.accessToken);
//           const decoded = jwtDecode(response.data.accessToken);
//           setName(decoded.name);
//           setExpire(decoded.exp);

//       } catch (error) {
//           if(error.response){
//              (error);
//           }
//       }
//   }

//   // const [dropdownVisible, setDropdownVisible] = useState(false);

//   // const toggleDropdown = () => {
//   //   setDropdownVisible(!dropdownVisible);
//   // };

//   return (
//     <nav>
//       <div className="logo-container">
//         <img src={logo} className="logo" alt="Logo" />
//       </div>
//       <ul>
//         <li><Link to="/">Beranda</Link></li>
//         <li><Link to="/Lokasi">Lokasi</Link></li>
//         <li><Link to="/menu">Makanan & Minuman</Link></li>
//         <li><Link to="/about">Tentang Kami</Link></li>
//         <li><Link to="/login">Halo {name}</Link></li>


//        <li><Link to="/login" onClick={Logout}>Keluar</Link></li>

      
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import logo from '../../assets/logo.png';
// import { useNavigate, Link } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';

// const Navbar = () => {
//   const [name, setName] = useState('');
//   const [token, setToken] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     refreshToken();
//   }, []);

//   const refreshToken = async () => {
//     try {
//       const response = await axios.get('http://localhost:1000/token');
//       setToken(response.data.accessToken);
//       const decoded = jwtDecode(response.data.accessToken);
//       setName(decoded.name);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.delete('http://localhost:1000/logout');
//       navigate("/login");
//       window.location.reload(); // Reload halaman setelah logout
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <nav>
//       <div className="logo-container">
//         <img src={logo} className="logo" alt="Logo" />
//       </div>
//       <ul>
//         <li><Link to="/">Beranda</Link></li>
//         <li><Link to="/Lokasi">Lokasi</Link></li>
//         <li><Link to="/menu">Makanan & Minuman</Link></li>
//         <li><Link to="/about">Tentang Kami</Link></li>
//         {/* Tampilkan tombol Logout jika sudah login, atau tombol Login jika belum login */}
//         {token ? (
//           <>
//             <li><Link to="/login">Halo {name}</Link></li>
//             <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
//           </>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Navbar = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:1000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete('http://localhost:1000/logout');
      navigate("/login");
      window.location.reload(); // Reload halaman setelah logout
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Beranda</Link></li>
        {token ? (
          <>
            <li><Link to="/Lokasi">Lokasi</Link></li>
            <li><Link to="/menu">Makanan & Minuman</Link></li>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/login">Halo {name}</Link></li>
            <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
