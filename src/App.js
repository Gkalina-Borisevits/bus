import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import RoutesCard from './RoutesCard';
import AboutApp from './AboutApp';
import 'react-calendar/dist/Calendar.css';

function App() {

  return (
    
    <div>
      <Routes>
        <Route path="/bus" element={<RoutesCard />} />
        <Route path="/about" element={<AboutApp />} />
      </Routes>
    </div>

  );
}

export default App;
