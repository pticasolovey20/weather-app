import { Routes, Route } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Popup } from 'components/Popup/Popup';
import { HomePage } from 'pages/HomePage/HomePage';
import { MonthStatPage } from 'pages/MonthStatPage/MonthStatPage';

function App() {
  return (
    <div className='globalContainer'>
      {/* <Popup/> */}
      <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/month-statistics' element={<MonthStatPage/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
