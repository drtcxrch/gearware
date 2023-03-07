import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import StravaRedirect from "../pages/StravaRedirect";
import YourBikes from "../pages/YourBikes";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redirect/*" element={<StravaRedirect />} />
            <Route path="/yourbikes" element={<YourBikes />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
