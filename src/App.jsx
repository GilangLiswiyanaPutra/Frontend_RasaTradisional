import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './Components/navigation/navbar'
import Footer from './Components/navigation/footer'

import Beranda  from './Components/pages/beranda'
import Lokasi  from './Components/pages/lokasi'
import Login  from './Components/pages/login'
import Register  from './Components/pages/register'
import About  from './Components/pages/about'

import Menusolo  from './Components/pages/menusolo'
import Menutegal  from './Components/pages/menutegal'
import Menusemarang  from './Components/pages/menusemarang'
import Menu  from './Components/pages/menu'
import Tegal from './Components/pages/tegal';
import Solo from './Components/pages/solo';
import Semarang from './Components/pages/semarang';

{/* makanan tegal */}
import Olos from './Components/pages/detailmakanantegal/olos';
import SotoTauco from './Components/pages/detailmakanantegal/sototauco';
import RujakTeplak from './Components/pages/detailmakanantegal/rujakteplak';
import KupatGlabed from './Components/pages/detailmakanantegal/kupatglabed';
import KupatBlengong from './Components/pages/detailmakanantegal/kupatblengong';
import Glotak from './Components/pages/detailmakanantegal/glotak';
import TahuAci from './Components/pages/detailmakanantegal/tahuaci';
import Kemronyos from './Components/pages/detailmakanantegal/kemronyos'

{/* minuman tegal */}
import EsKrimBatok from './Components/pages/detailminumantegal/eskrimbatok';
import EsDawetBeras from './Components/pages/detailminumantegal/esdawetberas';
import EsSagwan from './Components/pages/detailminumantegal/essagwan';
import Eslontrong from './Components/pages/detailminumantegal/eslontrong';
import Tehpoci from './Components/pages/detailminumantegal/tehpoci';

{/* makanan solo */}
import Lenjongan from './Components/pages/detailmakanansolo/lenjongan';
import Nasiliwet from './Components/pages/detailmakanansolo/nasiliwet';
import Satebuntel from './Components/pages/detailmakanansolo/satebuntel';
import Sosissolo from './Components/pages/detailmakanansolo/sosissolo';
import Serabi from './Components/pages/detailmakanansolo/serabi';
import Timlo from './Components/pages/detailmakanansolo/timlo';
import Tahukupat from './Components/pages/detailmakanansolo/tahukupat';
import Selatsolo from './Components/pages/detailmakanansolo/selatsolo';

{/* minuman solo */}
import Dongo from './Components/pages/detailminumansolo/dongo';
import Dawet from './Components/pages/detailminumansolo/dawet';
import Kapal from './Components/pages/detailminumansolo/kapal';
import Asle from './Components/pages/detailminumansolo/asle';
import Gempol from './Components/pages/detailminumansolo/gempol';


{/* makanan semarang */}
import Lumpia from './Components/pages/detailmakanansemarang/lumpia';
import SotoBangkong from './Components/pages/detailmakanansemarang/sotobangkong';
import TahuGimbal from './Components/pages/detailmakanansemarang/tahugimbal';
import MieKopyak from './Components/pages/detailmakanansemarang/miekopyak';
import WingkoBabat from './Components/pages/detailmakanansemarang/wingkobabat';
import LontongSpekoek from './Components/pages/detailmakanansemarang/lontongspekoek';
import PisangPlenet from './Components/pages/detailmakanansemarang/pisangplenet';



{/* minuman semarang */}

import EsCao from './Components/pages/detailminumansemarang/escao';
import EsMarem from './Components/pages/detailminumansemarang/esmarem';
import EsPuter from './Components/pages/detailminumansemarang/esputer';
import WedangTahu from './Components/pages/detailminumansemarang/wedangtahu';
import WedangKacangTanah from './Components/pages/detailminumansemarang/wedangkacangtanah';



{/* toko makanan tegal */}
import RujakTeplak1 from './Components/pages/toko_makanan_tegal/rujakteplak1';
import RujakTeplak2 from './Components/pages/toko_makanan_tegal/rujakteplak2';
import KupatGlabed1 from './Components/pages/toko_makanan_tegal/kupatglabed1';
import KupatGlabed2 from './Components/pages/toko_makanan_tegal/kupatglabed2';
import KupatBlengong1 from './Components/pages/toko_makanan_tegal/kupatblengong1';
import KupatBlengong2 from './Components/pages/toko_makanan_tegal/kupatblengong2';
import Glotak1 from './Components/pages/toko_makanan_tegal/glotak1';
import Glotak2 from './Components/pages/toko_makanan_tegal/glotak2';
import TahuAci1 from './Components/pages/toko_makanan_tegal/tahuaci1';
import TahuAci2 from './Components/pages/toko_makanan_tegal/tahuaci2';
import Kemronyos1 from './Components/pages/toko_makanan_tegal/kemronyos1';
import Kemronyos2 from './Components/pages/toko_makanan_tegal/kemronyos2';
import SotoTauco1 from './Components/pages/toko_makanan_tegal/sototauco1';
import SotoTauco2 from './Components/pages/toko_makanan_tegal/sototauco2';
import Olos1 from './Components/pages/toko_makanan_tegal/olos1';
import Olos2 from './Components/pages/toko_makanan_tegal/olos2';

{/* toko minuman tegal */}
import EsLontrong1 from './Components/pages/toko_minuman_tegal/eslontrong1';
import EsLontrong2 from './Components/pages/toko_minuman_tegal/eslontrong2';
import EsSagwan1 from './Components/pages/toko_minuman_tegal/essagwan1';
import EsSagwan2 from './Components/pages/toko_minuman_tegal/essagwan2';
import EsDawetBeras2 from './Components/pages/toko_minuman_tegal/esdawetberas2';
import EsDawetBeras1 from './Components/pages/toko_minuman_tegal/esdawetberas1';
import EsKrimBatok2 from './Components/pages/toko_minuman_tegal/eskrimbatok2';
import EsKrimBatok1 from './Components/pages/toko_minuman_tegal/eskrimbatok1';



{/* toko makanan solo */}
import Lenjongan1 from './Components/pages/toko_makanan_solo/lenjongan1';
import Lenjongan2 from './Components/pages/toko_makanan_solo/lenjongan2';
import Nasi_Liwet1 from './Components/pages/toko_makanan_solo/nasi_liwet1';
import Nasi_Liwet2 from './Components/pages/toko_makanan_solo/nasi_liwet2';
import Sate_Buntel1 from './Components/pages/toko_makanan_solo/sate_buntel1';
import Sate_Buntel2 from './Components/pages/toko_makanan_solo/sate_buntel2';
import Selat_Solo1 from './Components/pages/toko_makanan_solo/selat_solo1';
import Selat_Solo2 from './Components/pages/toko_makanan_solo/selat_solo2';
import Serabi_Solo1 from './Components/pages/toko_makanan_solo/serabi_solo1';
import Serabi_Solo2 from './Components/pages/toko_makanan_solo/serabi_solo2';
import Sosis_Solo1 from './Components/pages/toko_makanan_solo/sosis_solo1';
import Sosis_Solo2 from './Components/pages/toko_makanan_solo/sosis_solo2';
import Tahu_Kupat1 from './Components/pages/toko_makanan_solo/tahu_kupat1';
import Tahu_Kupat2 from './Components/pages/toko_makanan_solo/tahu_kupat2';
import Timlo1 from './Components/pages/toko_makanan_solo/timlo1';
import Timlo2 from './Components/pages/toko_makanan_solo/timlo2';


{/* toko minuman solo */}
import Asle1 from './Components/pages/toko_minuman_solo/asle1';
import Asle2 from './Components/pages/toko_minuman_solo/asle2';
import Dawet1 from './Components/pages/toko_minuman_solo/dawet1';
import Dawet2 from './Components/pages/toko_minuman_solo/dawet2';
import Dongo1 from './Components/pages/toko_minuman_solo/dongo1';
import Dongo2 from './Components/pages/toko_minuman_solo/dongo2';
import Gempol1 from './Components/pages/toko_minuman_solo/gempol1';
import Gempol2 from './Components/pages/toko_minuman_solo/gempol2';
import Kapal1 from './Components/pages/toko_minuman_solo/kapal1';
import Kapal2 from './Components/pages/toko_minuman_solo/kapal2';

{/* toko makanan semarang */}
import Lumpia1 from './Components/pages/toko_makanan_semarang/lumpia1';
import Lumpia2 from './Components/pages/toko_makanan_semarang/lumpia2';
import MieKopyak1 from './Components/pages/toko_makanan_semarang/miekopyak1';
import MieKopyak2 from './Components/pages/toko_makanan_semarang/miekopyak2';
import PisangPlenet1 from './Components/pages/toko_makanan_semarang/pisangplenet1';
import PisangPlenet2 from './Components/pages/toko_makanan_semarang/pisangplenet2';
import SotoBangkong1 from './Components/pages/toko_makanan_semarang/sotobangkong1';
import TahuGimbal1 from './Components/pages/toko_makanan_semarang/tahugimbal1';
import TahuGimbal2 from './Components/pages/toko_makanan_semarang/tahugimbal2';
import WingkoBabat1 from './Components/pages/toko_makanan_semarang/wingkobabat1';
import WingkoBabat2 from './Components/pages/toko_makanan_semarang/wingkobabat2';
import LontongSpekoek1 from './Components/pages/toko_makanan_semarang/lontongspekoek1';
import LontongSpekoek2 from './Components/pages/toko_makanan_semarang/lontongspekoek2';


{/* toko minuman semarang */}
import EsCao1 from './Components/pages/toko_minuman_semarang/escao1';
import EsMarem1 from './Components/pages/toko_minuman_semarang/esmarem1';
import EsMarem2 from './Components/pages/toko_minuman_semarang/esmarem2';
import EsPuter1 from './Components/pages/toko_minuman_semarang/esputer1';
import EsPuter2 from './Components/pages/toko_minuman_semarang/esputer2';
import WedangKacangTanah1 from './Components/pages/toko_minuman_semarang/wedangkacangtanah1';
import WedangTahu1 from './Components/pages/toko_minuman_semarang/wedangtahu1';
import WedangTahu2 from './Components/pages/toko_minuman_semarang/wedangtahu2';




const App = () => {
  return (
    
    <Router>
    
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="beranda" element={<Beranda />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route path="/menusolo" element={<Menusolo />} />
        <Route path="/menutegal" element={<Menutegal />} />
        <Route path="/menusemarang" element={<Menusemarang />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/tegal" element={<Tegal />} />
        <Route path="/solo" element={<Solo />} />
        <Route path="/semarang" element={<Semarang />} />

 {/* makanan tegal */}
        <Route path="/olos/:id" element={<Olos />} />
        <Route path="/sototauco/:id" element={<SotoTauco />} />
        <Route path="/rujakteplak/:id" element={<RujakTeplak />} />
        <Route path="/kupatglabed/:id" element={<KupatGlabed />} />
        <Route path="/glotak/:id" element={<Glotak />} />
        <Route path="/tahuaci/:id" element={<TahuAci />} />
        <Route path="/kupatblengong/:id" element={<KupatBlengong />} />
        <Route path="/kemronyos/:id" element={<Kemronyos />} />

        
{/* makanan solo */}
<Route path="/lenjongan/:id" element={<Lenjongan />} />
        <Route path="/serabi/:id" element={<Serabi />} />
        <Route path="/nasiliwet/:id" element={<Nasiliwet />} />
        <Route path="/selatsolo/:id" element={<Selatsolo />} />
        <Route path="/timlo/:id" element={<Timlo />} />
        <Route path="/tahukupat/:id" element={<Tahukupat />} />
        <Route path="/satebuntel/:id" element={<Satebuntel />} />
        <Route path="/sosissolo/:id" element={<Sosissolo />} />

{/* minuman solo */}
        <Route path="/dongo/:id" element={<Dongo />} />
        <Route path="/asle/:id" element={<Asle />} />
        <Route path="/dawet/:id" element={<Dawet />} />
        <Route path="/gempol/:id" element={<Gempol />} />
        <Route path="/kapal/:id" element={<Kapal />} />


{/* minuman tegal */}
        <Route path="/eskrimbatok/:id" element={<EsKrimBatok />} />
        <Route path="/esdawetberas/:id" element={<EsDawetBeras />} />
        <Route path="/essagwan/:id" element={<EsSagwan />} />
        <Route path="/eslontrong/:id" element={<Eslontrong />} />
        <Route path="/tehpoci/:id" element={<Tehpoci />} />



 {/* makanan semarang */}
        <Route path="/lumpia/:id" element={<Lumpia />} />
        <Route path="/sotobangkong/:id" element={<SotoBangkong />} />
        <Route path="/tahugimbal/:id" element={<TahuGimbal />} />
        <Route path="/miekopyak/:id" element={<MieKopyak />} />
        <Route path="/wingkobabat/:id" element={<WingkoBabat />} />
        <Route path="/lontongspekoek/:id" element={<LontongSpekoek />} />
        <Route path="/pisangplenet/:id" element={<PisangPlenet />} />

 {/* minuman semarang */}
        <Route path="/escao/:id" element={<EsCao />} />
        <Route path="/esmarem/:id" element={<EsMarem />} />
        <Route path="/esputer/:id" element={<EsPuter />} />
        <Route path="/wedangtahu/:id" element={<WedangTahu />} />
        <Route path="/wedangkacangtanah/:id" element={<WedangKacangTanah />} />
        



{/* toko makanan tegal */}
<Route path="/rujakteplak1" element={<RujakTeplak1 />} />
<Route path="/rujakteplak2" element={<RujakTeplak2 />} />
<Route path="/kupatglabed1" element={<KupatGlabed1 />} />
<Route path="/kupatglabed2" element={<KupatGlabed2 />} />
<Route path="/kupatblengong1" element={<KupatBlengong1 />} />
<Route path="/kupatblengong2" element={<KupatBlengong2 />} />
<Route path="/glotak1" element={<Glotak1 />} />
<Route path="/glotak2" element={<Glotak2 />} />
<Route path="/tahuaci1" element={<TahuAci1 />} />
<Route path="/tahuaci2" element={<TahuAci2 />} />
<Route path="/kemronyos1" element={<Kemronyos1 />} />
<Route path="/kemronyos2" element={<Kemronyos2 />} />
<Route path="/sototauco1" element={<SotoTauco1 />} />
<Route path="/sototauco2" element={<SotoTauco2 />} />
<Route path="/olos1" element={<Olos1 />} />
<Route path="/olos2" element={<Olos2 />} />

{/* toko mainuman tegal */}
<Route path="/eslontrong1" element={<EsLontrong1 />} />
<Route path="/eslontrong2" element={<EsLontrong2 />} />
<Route path="/essagwan1" element={<EsSagwan1 />} />
<Route path="/essagwan2" element={<EsSagwan2 />} />
<Route path="/eskrimbatok1" element={<EsKrimBatok1 />} />
<Route path="/eskrimbatok2" element={<EsKrimBatok2 />} />
<Route path="/esdawetberas1" element={<EsDawetBeras1 />} />
<Route path="/esdawetberas2" element={<EsDawetBeras2 />} />





{/* toko makanan solo */}
        <Route path="/lenjongan1" element={<Lenjongan1 />} />
        <Route path="/lenjongan2" element={<Lenjongan2 />} />
        <Route path="/nasiliwet1" element={<Nasi_Liwet1 />} />
        <Route path="/nasiliwet2" element={<Nasi_Liwet2 />} />
        <Route path="/satebuntel1" element={<Sate_Buntel1 />} />
        <Route path="/satebuntel2" element={<Sate_Buntel2 />} />
        <Route path="/selatsolo1" element={<Selat_Solo1 />} />
        <Route path="/selatsolo2" element={<Selat_Solo2 />} />
        <Route path="/serabisolo1" element={<Serabi_Solo1 />} />
        <Route path="/serabisolo2" element={<Serabi_Solo2 />} />
        <Route path="/sosissolo1" element={<Sosis_Solo1 />} />
        <Route path="/sosissolo2" element={<Sosis_Solo2 />} />
        <Route path="/tahukupat1" element={<Tahu_Kupat1 />} />
        <Route path="/tahukupat2" element={<Tahu_Kupat2 />} />
        <Route path="/timlo1" element={<Timlo1 />} />
        <Route path="/timlo2" element={<Timlo2 />} />

{/* toko minuman solo */}

      <Route path="/asle1" element={<Asle1 />} />
      <Route path="/asle2" element={<Asle2 />} />
      <Route path="/dawet1" element={<Dawet1 />} />
      <Route path="/dawet2" element={<Dawet2 />} />
      <Route path="/dongo1" element={<Dongo1 />} />
      <Route path="/dongo2" element={<Dongo2 />} />
      <Route path="/gempol1" element={<Gempol1 />} />
      <Route path="/gempol2" element={<Gempol2 />} />
      <Route path="/kapal1" element={<Kapal1 />} />
      <Route path="/kapal2" element={<Kapal2 />} />
      
{/* toko makanan semarang */}
<Route path="/lumpia1" element={<Lumpia1 />} />
<Route path="/lumpia2" element={<Lumpia2 />} />
<Route path="/miekopyak1" element={<MieKopyak1 />} />
<Route path="/miekopyak2" element={<MieKopyak2 />} />
<Route path="/pisangplenet1" element={<PisangPlenet1 />} />
<Route path="/pisangplenet2" element={<PisangPlenet2 />} />
<Route path="/sotobangkong1" element={<SotoBangkong1 />} />
<Route path="/tahugimbal1" element={<TahuGimbal1 />} />
<Route path="/tahugimbal2" element={<TahuGimbal2 />} />
<Route path="/wingkobabat1" element={<WingkoBabat1 />} />
<Route path="/wingkobabat2" element={<WingkoBabat2 />} />
<Route path="/lontongspekoek1" element={<LontongSpekoek1 />} />
<Route path="/lontongspekoek2" element={<LontongSpekoek2 />} />


{/* toko minuman semarang */}
<Route path="/escao1" element={<EsCao1 />} />
<Route path="/esmarem1" element={<EsMarem1 />} />
<Route path="/esmarem2" element={<EsMarem2 />} />
<Route path="/esputer1" element={<EsPuter1 />} />
<Route path="/esputer2" element={<EsPuter2 />} />
<Route path="/wedangkacangtanah1" element={<WedangKacangTanah1 />} />
<Route path="/wedangtahu1" element={<WedangTahu1 />} />
<Route path="/wedangtahu2" element={<WedangTahu2 />} />



      </Routes>
     
      <Footer />
      </div>
    
  </Router>
  )
}

export default App
