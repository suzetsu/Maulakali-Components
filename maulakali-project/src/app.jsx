import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Hotdeals from "./Component/Landing/HotDeals/Hotdeals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activities from "./Component/Landing/Activities/Activities";
import ActivitiesSlider from "./Component/Landing/Activities/ActivitiesSlider";
import Packages from "./Component/Landing/Packages/Packages";
import Booknow from "./Component/Landing/BookNow/Booknow";
import ContactUs from "./Component/ContactUs/Contact";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Hotdeals />} />
        <Route path="/activities" element={<ActivitiesSlider />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/book-now" element={<Booknow />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
