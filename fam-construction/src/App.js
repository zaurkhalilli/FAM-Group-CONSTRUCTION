import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/Layout/Layout';
import Home from './Pages/Home/Home';
import Haqqinda from './Pages/Haqqinda/Haqqinda';
import Lahiye from './Pages/Layihə/Layihe';
import Xidmetler from './Pages/Xidmətlər/Xidmetler';
import Elaqe from './Pages/Əlaqə/Elaqe';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fizuli from './Pages/Fizuli/Fizuli';
import Siyezen from './Pages/Siyezen/Siyezen';
import Seyidehmedli from './Pages/Seyidehmedli/Seyidehmedli';
import Qusar from './Pages/Qusar/Qusar';
import Xacmaz from './Pages/Xacmaz/Xacmaz';
import Azerkimya from './Pages/Azerkimya/Azerkimya';
import Agdam from './Pages/Agdam/Agdam';
import Bakcell from './Components/Bakcell/Bakcell';
import ScrollToTop from './ScrollToTop';
import Lisenziyalar from './Pages/Lisenziyalar/Lisenziyalar';
import Leafspace1 from './Pages/LeafSpace/Leafspace1';
import Bakisamaxi from './Pages/BakiSamaxi/Bakisamaxi';
import Engixaran from './Pages/Engixaran/Engixaran';
import Fizulicuvarli from './Pages/Fizuli-Cuvarli/Fizulicuvarli';
const App = () => {
return (
  <div>
    <BrowserRouter>
    <ScrollToTop /> 
    <Layout>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/haqqimizda' element={<Haqqinda/>} />
        <Route index path='/xidmetler' element={<Xidmetler/>} />
        <Route index path='/layiheler' element={<Lahiye/>} />
        <Route index path='/elaqe' element={<Elaqe/>} />
        <Route index path='/bakcell' element={<Bakcell/>} />
        <Route index path='/fizuli' element={<Fizuli/>} />
        <Route index path='/siyezen' element={<Siyezen/>} />
        <Route index path='/seyidehmedli' element={<Seyidehmedli/>} />
        <Route index path='/qusar' element={<Qusar/>} />
        <Route index path='/agdam' element={<Agdam/>} />
        <Route index path='/xacmaz' element={<Xacmaz/>} />
        <Route index path='/azerkimya' element={<Azerkimya/>} />
        <Route index path='/lisenziyalar' element={<Lisenziyalar/>} />
        <Route index path='/leafspace' element={<Leafspace1/>} />
        <Route index path='/baki-samaxi' element={<Bakisamaxi/>} />
        <Route index path='/engixaran' element={<Engixaran/>} />
        <Route index path='/fizulicuvarli' element={<Fizulicuvarli/>} />
        <Route index path='/lisenziyalar' element={<Lisenziyalar/>} />
        <Route index path='/lisenziyalar' element={<Lisenziyalar/>} />
        <Route index path='/lisenziyalar' element={<Lisenziyalar/>} />
      </Routes>
    </Layout> 
    </BrowserRouter>
   
  </div>
);

}
export default App;
