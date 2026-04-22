import { createContext, useContext, useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import storedData from "../utils/data.json";
import { getWeather } from "../api/api";
import { cityData } from "../types/types";

const DataContext = createContext<{
  data: cityData | undefined;
  loading: boolean;
  isConnected: boolean | null;
  fetchData: (city: string) => void;
} | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<cityData | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const { isConnected } = useNetInfo();

  const fetchData = async (city: string) => {
    setLoading(true);
    const cityItem = await getWeather(city);
    setData(cityItem);
    setLoading(false);
  };

  return (
    <DataContext.Provider value={{ data, loading, fetchData, isConnected }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error("useData must be used within a DataProvider");
  }
  return data;
};

export default DataContext;
