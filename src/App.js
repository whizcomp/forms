import React from "react";
import Forms from "./container/Forms";
import LocalContent from "./container/LocalContent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Content from "./container/LocalContent";
import Home from "./container/Home";
import Diaspora from "./container/Diaspora";
import Complete from "./container/Complete";
import Admin from "./container/Admin";
import ViewSender from "./container/ViewSender";
import Settings from "./container/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/:place/:id" element={<ViewSender />}></Route>
        <Route path="/diaspora" element={<Diaspora />}></Route>
        <Route path="/local" element={<Forms />}></Route>
        <Route path="/thanks" element={<Complete />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
