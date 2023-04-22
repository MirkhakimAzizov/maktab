import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Help from "./pages/Help";
import User from "./pages/Users/User";
import Course from "./pages/Course";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/user/:id" element={<User />}/>
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/courses" element={<Course />}/>
            <Route path="/news" element={<Home />}/>
          </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
