import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

import { cityData } from "../types/types";

export default function Index() {
  const [data, setData] = useState<cityData | undefined>(undefined);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E0F2FE",
        padding: 20,
      }}>
      <SearchBar handleSearch={setData} />
      {data ? <WeatherCard data={data} /> : <ErrorMessage />}
    </SafeAreaView>
  );
}
