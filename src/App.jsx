import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/career"} element={<Career />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
