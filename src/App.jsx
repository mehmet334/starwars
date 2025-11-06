import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StarshipList from "./components/StarshipList";
import StarshipDetail from "./components/StarshipDetail";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="brand">
          <span className="brand-sw">Star</span> Wars <span className="brand-sw">App</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Starships</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipDetail />} />
      </Routes>

      <footer className="footer">
        <small>Data: <a href="https://swapi.dev/" target="_blank" rel="noreferrer">SWAPI</a></small>
      </footer>
    </div>
  );
}
