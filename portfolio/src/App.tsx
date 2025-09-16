import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { HardwarePage } from "./pages/Hardware.tsx";
import { AboutPage } from "./pages/About.tsx";
import { SoftwarePage } from "./pages/Software.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/software" element={<SoftwarePage />} />
      </Routes>
    </Router>
  );
}

export default App;