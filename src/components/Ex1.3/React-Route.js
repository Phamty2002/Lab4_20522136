import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlankLayout from "layouts/Blank";
import HomeLayout from "layouts/home";

import Home from "pages/home";
import Shop from "pages/shop";
import Contact from "pages/contact";
import Login from "pages/login";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* Nested route for the home page */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Blank layout for the login page */}
      <Route path="/" element={<BlankLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
