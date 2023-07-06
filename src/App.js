import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './Components/Home';
import { Signup } from "./Components/Signup";
import { Signin } from "./Components/Signin";
import Sidebar from "./Components/Global/Sidebar";
import { Dashboard } from "./Components/Dashboard";
import { Campaings } from "./Components/Campaings";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/campain" element={<Campaings/>}/>
        </Routes>
      </BrowserRouter>

  );
};

export default App;
