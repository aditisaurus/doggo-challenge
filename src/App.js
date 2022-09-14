import React from 'react'
import BreedImage from './BreedImage';
import { Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import BreedList from './BreedList';


function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route path="login" element={<Login />} />
    <Route path="breedList" element={<BreedList />} />
    <Route path="breedImage" element={<BreedImage />} />
    </Routes>
    </div>
  );
}

export default App;
