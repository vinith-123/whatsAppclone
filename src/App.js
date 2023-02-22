import Home from './Home'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Download from './Download';
// import { Link } from 'react-router-dom';
import HelpCenter from './HelpCenter'
import Privacy from './Privacy'
import Download from './Download';
import Blog from './Blog';


function App() {
  return (
    <div className="App">
   { /*<Home/> */}
    <BrowserRouter>
    <Routes>
    <Route path='blog' element={<Blog/>} />
    <Route path='helpcenter' element={<HelpCenter/>} />
    <Route path='download' element={<Download/>} />
    <Route path='privacy' element={<Privacy/>} />
    </Routes></BrowserRouter>
    <Privacy/>
    </div>
  );
}

export default App;
