const BASE = "https://swapi.dev/api/starships/";

/**
 * Listeleme veya arama.
 * @param {string|null} url  - Bir sonraki sayfanın tam URL’si (response.next). Veya null ise BASE kullanılır.
 * @param {string} search    - Arama terimi (opsiyonel).
 */
export async function fetchStarships({ url = null, search = "" } = {}) {
  const u = new URL(url || BASE);
  if (!url && search) u.searchParams.set("search", search);
  const res = await fetch(u.toString());
  if (!res.ok) throw new Error("Network error");
  return res.json(); // { count, next, previous, results }
}

/**
 * Tek starship detayı id’ye göre
 */
export async function fetchStarshipById(id) {
  const res = await fetch(`${BASE}${id}/`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
}

/** URL içinden numeric id’yi çıkarır (https://swapi.dev/api/starships/9/) -> 9 */
export function extractId(url) {
  const m = url.match(/\/starships\/(\d+)\/?$/);
  return m ? m[1] : null;
}
