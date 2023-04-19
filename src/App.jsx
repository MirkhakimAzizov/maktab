import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/Users/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/user/:id" element={<User />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
