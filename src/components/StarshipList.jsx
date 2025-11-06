import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import StarshipCard from "./StarshipCard";
import { fetchStarships } from "../api";

export default function StarshipList() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const isEmpty = items.length === 0 && !loading;

  const title = useMemo(
    () => (search ? `Starships (search: "${search}")` : "Starships"),
    [search]
  );

  async function loadFirstPage(q = "") {
    try {
      setError("");
      setLoading(true);
      const data = await fetchStarships({ search: q });
      setItems(data.results || []);
      setNextUrl(data.next);
    } catch (e) {
      setError("Veri alınamadı. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  async function loadMore() {
    if (!nextUrl) return;
    try {
      setLoading(true);
      const data = await fetchStarships({ url: nextUrl });
      setItems((prev) => [...prev, ...(data.results || [])]);
      setNextUrl(data.next);
    } catch (e) {
      setError("Daha fazla veri alınamadı.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFirstPage("");
  }, []);

  const handleSearch = (q) => {
    setSearch(q);
    loadFirstPage(q);
  };

  return (
    <section>
      <h1 className="section-title">{title}</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <div className="alert error">{error}</div>}

      {loading && items.length === 0 && (
        <div className="loading">Loading starships…</div>
      )}

      {isEmpty && !error && <div className="empty">No starships found.</div>}

      <div className="grid">
        {items.map((ship) => (
          <StarshipCard key={ship.url} ship={ship} />
        ))}
      </div>

      <div className="load-more-row">
        <button
          className="btn"
          onClick={loadMore}
          disabled={!nextUrl || loading}
          title={!nextUrl ? "No more starships" : "Load more"}
        >
          {loading && items.length > 0 ? "Loading…" : "Load More"}
        </button>
      </div>
    </section>
  );
}
