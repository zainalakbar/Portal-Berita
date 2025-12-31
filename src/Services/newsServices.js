export async function fetchNews(category = "") {
  try {
  const url = category
    ? `/api/news?category=&{category}`
    : `/api/news`;

  const response = await fetch(url);
  const data = await response.json();
  return data; 

} catch (error) {
  console.error("Gagal fetch berita:", error);
  return [];
}
}
