import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ClientZone from "./pages/clientZone/ClientZone";
import AllClients from "./pages/allClients/AllClients";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client/:id" element={<ClientZone />} />
          <Route path="/clients" element={<AllClients />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
