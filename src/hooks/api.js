const API_BASE_URL = "https://postrs.gistia.online/api";

export async function fetchData(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();
  return data;
}
