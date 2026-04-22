import { useNetInfo } from "@react-native-community/netinfo";
import { createContext, useContext, useState } from "react";

import { getWeather } from "../api/api";
import { cityData, dataContextType } from "../types/types";

/**
 * Contexte global météo (DataContext)
 *
 * Fournit les données météo, l'état de chargement, la fonction de recherche et l'état réseau à toute l'application.
 *
 * @type { dataContextType }
 */
const DataContext = createContext<dataContextType | null>(null);

/**
 * DataProvider
 *
 * Fournit le contexte global météo à l'application.
 *
 * @param {React.ReactNode} children - Composants enfants
 * @returns {JSX.Element} Provider React
 */
export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<cityData | null>(null);
  const [loading, setLoading] = useState(false);
  const { isConnected } = useNetInfo();

  /**
   * Récupère les données météo pour une ville donnée.
   * @param {string} city - Nom de la ville
   */
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

/**
 * Hook pour consommer le contexte météo global.
 * @returns { data, loading, fetchData, isConnected }
 * @throws {Error} si utilisé hors du DataProvider
 */
export const useData = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error("useData must be used within a DataProvider");
  }
  return data;
};

export default DataContext;
