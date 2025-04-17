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
const App = () => {
return (
  <div>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/haqqimizda' element={<Haqqinda/>} />
        <Route index path='/xidmetler' element={<Xidmetler/>} />
        <Route index path='/lahiyeler' element={<Lahiye/>} />
        <Route index path='/elaqe' element={<Elaqe/>} />
      </Routes>
    </Layout> 
    </BrowserRouter>
   
  </div>
);
}
export default App;
