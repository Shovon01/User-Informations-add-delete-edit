import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import Edit from "./components/users/Edit";
import Viewuser from "./components/users/Viewuser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<Edit />} />
          <Route exact path="/users/viewuser/:id" element={<Viewuser />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
