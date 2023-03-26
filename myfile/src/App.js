import logo from './logo.svg';
import './App.css';
import Sign_In from './component/Sign_In';
import Rrgister from './component/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Thems from './component/Thems';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign_In/>} />
        <Route path="/Register" element={<Rrgister />} />
      </Routes>
    </BrowserRouter>
    <Thems/>

    </div>
  );
}

export default App;
