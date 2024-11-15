import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/test/Test";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Logement from "./pages/logement/Logement";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
