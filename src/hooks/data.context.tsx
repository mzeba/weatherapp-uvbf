import { createContext, useContext, useState } from "react";

import storedData from "../utils/data.json";

import { cityData } from "../types/types";

const DataContext = createContext<{
  data: cityData | undefined;
  loading: boolean;
  fetchData: (city: string) => void;
} | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<cityData | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetchData = (city: string) => {
    setLoading(true);
    const cityItem = storedData.find(
      (item) => item.city.toLowerCase() === city.toLowerCase().trim(),
    ) as cityData | undefined;

    setData(cityItem);
    setLoading(false);
  };

  return (
    <DataContext.Provider value={{ data, loading, fetchData }}>{children}</DataContext.Provider>
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
