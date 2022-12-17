import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { MonthStatPage } from 'pages/MonthStatPage/MonthStatPage';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/month-statistics' element={<MonthStatPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
