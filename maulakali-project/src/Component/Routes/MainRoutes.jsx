import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "../../Components";
import Layout from "./Layout";
import HotdealsContent from "../HotDeals/HotdealsContent";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Components />} />
      <Route path="hotdeals" element={<HotdealsContent />} />
    </Route>
  </Routes>
);

export default MainRoutes;
