import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import Login from "./views/Login";
import Products from "./views/Products";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/Contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
