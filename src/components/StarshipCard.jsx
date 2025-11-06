import React from "react";
import { Link } from "react-router-dom";
import { extractId } from "../api";

export default function StarshipCard({ ship }) {
  const id = extractId(ship.url);
  return (
    <Link to={`/starships/${id}`} className="card">
      <div className="card-title">{ship.name}</div>
      <div className="card-sub">Model: {ship.model}</div>
      <div className="card-meta">
        <span>Max Atmo. Speed: </span>
        <strong>{ship.max_atmosphering_speed}</strong>
      </div>
    </Link>
  );
}
