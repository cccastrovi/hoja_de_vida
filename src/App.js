import React from "react";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/index.jsx";
import Estudios from "./components/estudios/index.jsx";
import ExperienciasLaborales from "./components/experiencias/index.jsx";
import Referencias from "./components/referencias/index.jsx";


function App(params) {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/estudios" element={<Estudios/>}></Route>
        <Route path="/experiencias" element={<ExperienciasLaborales/>}></Route>
        <Route path="/referencias" element={<Referencias/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


//const Home = () : Element => <h1>Home</h1>
//const SearchPage = (): Element => <h1>Search Page</h1>



//function App() {
 // return (
  //  <div className="App">
      
   //   <Headerhoja></Headerhoja>
    //  <BodyHoja>
     //   <Routes>
      //    <Route path="/" element={<Home/>}></Route>
       //   <Route path="/search-page" element={<SearchPage/>}></Route>
       // </Routes>
      //</BodyHoja>
      //<Footerhoja></Footerhoja>
   // </div>
  //);
//}

export default App;
