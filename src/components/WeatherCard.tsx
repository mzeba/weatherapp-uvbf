/**
 * WeatherCard Component
 *
 * Affiche les informations météo d'une ville sous forme de carte stylisée.
 *
 * @param {cityData} data - Données météo de la ville (nom, pays, température, icône, description).
 * @returns {JSX.Element} Carte météo formatée pour affichage dans l'application.
 *
 * Spécificités Expo/React Native :
 * - Utilise les styles natifs pour l'affichage.
 * - Prévu pour affichage sur mobile (iOS/Android).
 */
import { StyleSheet, Text, View } from "react-native";

import { cityData } from "../types/types";

/**
 * Composant principal pour l'affichage d'une carte météo.
 * @param data Données météo de la ville
 */
const WeatherCard = ({ data }: { data: cityData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cityName}>
        {data.city}, {data.country}
      </Text>
      <Text style={styles.icon}>{data.icon}</Text>
      <Text style={styles.temperature}>{data.temperature}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
};

export default WeatherCard;

/**
 * Styles pour le composant WeatherCard.
 *
 * NOTE : Les styles sont adaptés pour un affichage centré et une carte visuellement agréable.
 */
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  cityName: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    fontSize: 20,
  },
  icon: {
    fontSize: 48,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 40,
    fontWeight: "800",
  },
  description: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
});
