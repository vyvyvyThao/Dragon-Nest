import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import LoginPage from "./pages/LoginPage";
import './App.css';
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage"
import UserPage from "./pages/UserPage";


function App() {
  return (
  <Router>
    <NavBar />
      <Routes>
        <Route path="/search" element={<ListingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/listing/:id" element={<DetailPage />} />
      </Routes>
    <Footer />
  </Router>
  );
}

function NotFound() {
  return <div>404 NOT FOUND</div>;
}

export default App;
