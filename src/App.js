import "./App.css";
import { Home } from "./containers/Home";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { SpecialistAd } from "./components/specialistAd";
import { Services } from "./containers/Home/services";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="specialistAd" element={<SpecialistAd />} />
          <Route path="services" element={<Services />} />
          <Route path="/customer/access/:action" element={<CustomerAccessPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
