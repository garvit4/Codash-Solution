import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './modules/header';
import Home from './modules/home';
import About from './modules/about';
import OurWork from './modules/ourWork';
import Services from './modules/services';
import Verticals from './modules/verticals';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/our-work'} element={<OurWork />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/verticals'} element={<Verticals />} />
      </Routes>
    </div>
  );
}

export default App;
