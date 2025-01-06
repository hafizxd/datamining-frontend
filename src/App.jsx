import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Riwayat from "./main/Riwayat";
import Login from "./auth/Login";
import Register from "./auth/Register";
import About from "./main/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
