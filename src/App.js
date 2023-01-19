import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./compnents/Company/Company";
import Contact from "./compnents/Contact/Contact";
import FaqPage from "./compnents/FAQPAGE/FaqPage";
import Home from "./compnents/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
