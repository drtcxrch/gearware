import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import StravaRedirect from "../pages/StravaRedirect";
import YourDistance from "../pages/YourDistance";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redirect/*" element={<StravaRedirect />} />
            <Route path="/yourdistance" element={<YourDistance />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
