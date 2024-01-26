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
import Temple from "./Component/Landing/MaulakaliTemple/Temple";
import Newsletter from "./Component/Landing/NewsLetter/Newsletter";
import Components from "./Components";
import HotdealsContent from "./Component/HotDeals/HotdealsContent";
import Layout from "./Component/Routes/Layout";
import MainRoutes from "./Component/Routes/MainRoutes";

export function App() {
  const componentHeaders = {};
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
