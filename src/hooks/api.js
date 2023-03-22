const API_BASE_URL = "https://postrs.gistia.online/api";

export async function fetchData(endpoint, options = {}) {
  const defaultHeaders = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const requestOptions = {
    method: "GET",
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);

  const data = await response.json();
  return data;
}
