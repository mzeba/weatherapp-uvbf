/**
 * Fichier d'entrée principal de l'écran d'accueil.
 *
 * Rôle :
 * - Affiche la barre de recherche, la carte météo ou un message d'erreur selon l'état de l'application.
 * - Gère l'affichage conditionnel du loader pendant la récupération des données.
 *
 * Points d'entrée clés :
 * - Utilise le contexte de données (useData) pour orchestrer l'état global.
 * - Compose les composants SearchBar, WeatherCard et ErrorMessage.
 *
 * Spécificités Expo/React Native :
 * - Utilise SafeAreaView pour respecter les zones sûres sur mobile.
 * - Affichage conditionnel selon l'état (chargement, données, erreur).
 */
import { ActivityIndicator,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

import { useData } from "../hooks/data.context";

/**
 * Composant principal de l'écran d'accueil.
 *
 * Affiche la barre de recherche, la carte météo ou un message d'erreur selon l'état de l'application.
 * Utilise le contexte global pour gérer les données et l'état de chargement.
 *
 * @returns {JSX.Element} Interface utilisateur principale de l'application météo.
 */
export default function Index() {
  const { loading, data, fetchData } = useData();
  return (
    <SafeAreaView
        style={styles.container}>
      <SearchBar fetchData={fetchData} />
      {loading && <ActivityIndicator animating={loading} size="large" color="#4A90E2" />}
      {data ? <WeatherCard data={data} /> : <ErrorMessage />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F2FE",
    padding: 20,
  },
});
