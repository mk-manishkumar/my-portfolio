import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home show={show} setShow={setShow} />} />
          <Route path={"/about"} element={<About show={show} setShow={setShow} />} />
          <Route path={"/career"} element={<Career show={show} setShow={setShow} />} />
          <Route path={"/portfolio"} element={<Portfolio show={show} setShow={setShow} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
