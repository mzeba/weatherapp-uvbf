const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getWeather = async (city: string) => {
  const response = await fetch(`${API_URL}/current.json?q=${city}&lang=fr-&key=${API_KEY}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
