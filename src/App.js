import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home";
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import TourDetails from './Component/TourDetails/TourDetails';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import data from './data/data.json'

function App() {
  return (
    <div>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detal/:id' element={<TourDetails data={data}/>} />
        
        
      </Routes>


    </div>
  );
}

export default App;
