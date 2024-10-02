// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Nav from "./Nav";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";
import Temi from "./Temi";
import Tola from "./Tola";
import DefaultProfile from "./DefaultProfile";
import Number from "./Number";
import Product from "./Product";
import ApiProduct from "./ApiProduct";
import MusicApi from "./MusicApi";
function App() {
  return (
    <>
      {/* <Nav /> */}

      <Routes>
        {/* <Route path="/" element={<Body />} /> */}
        <Route path="/about" element={<About />} />
        {/* note that useeffect route is product here  */}
        <Route path="/product" element={<Product />} />
        {/* <Route path="/ApiProduct" element={<ApiProduct />} /> */}
        <Route path="/MusicApi" element={<MusicApi />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/defaultprofile" element={<DefaultProfile />} />
          <Route path="/profile/temi" element={<Temi />} />
          <Route path="/profile/tola" element={<Tola />} />
          <Route path="/profile/:item" element={<Number />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
