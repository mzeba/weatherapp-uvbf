import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

import { useData } from "../hooks/data.context";

export default function Index() {
  const { loading, data, fetchData } = useData();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E0F2FE",
        padding: 20,
      }}>
      <SearchBar fetchData={fetchData} />
      {loading ? <ActivityIndicator animating={loading} size="large" color="#4A90E2" /> : null}
      {data ? <WeatherCard data={data} /> : <ErrorMessage />}
    </SafeAreaView>
  );
}
