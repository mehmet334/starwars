import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchStarshipById } from "../api";

export default function StarshipDetail() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchStarshipById(id);
        if (active) setShip(data);
      } catch (e) {
        setErr("Starship not found.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return <div className="loading">Loading…</div>;
  if (err) return (
    <div className="alert error">
      {err} <div className="back-row"><Link to="/" className="btn">Back</Link></div>
    </div>
  );

  return (
    <section className="detail">
      <h1 className="section-title">{ship.name}</h1>

      <div className="detail-grid">
        <DetailRow label="Model" value={ship.model} />
        <DetailRow label="Manufacturer" value={ship.manufacturer} />
        <DetailRow label="Passengers" value={ship.passengers} />
        <DetailRow label="Crew" value={ship.crew} />
        <DetailRow label="Max Atmosphering Speed" value={ship.max_atmosphering_speed} />
        <DetailRow label="Cargo Capacity" value={ship.cargo_capacity} />
      </div>

      <div className="back-row">
        <Link to="/" className="btn">Back</Link>
      </div>
    </section>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
}
