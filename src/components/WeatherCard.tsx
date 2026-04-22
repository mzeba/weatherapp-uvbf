/**
 * WeatherCard Component
 *
 * Affiche les informations météo d'une ville sous forme de carte stylisée.
 *
 * @param {{ data: cityData }} props - Données météo de la ville (voir type cityData)
 * @returns {JSX.Element} Carte météo formatée pour affichage mobile.
 *
 * Détails :
 * - Affiche le nom, le pays, la date locale, l'icône météo, la température et la description.
 * - Utilise dayjs pour le formatage de la date.
 * - Styles adaptés pour mobile (Expo/React Native).
 */

import dayjs from "dayjs";
import "dayjs/locale/fr";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { Image, StyleSheet, Text, View } from "react-native";

import { cityData } from "../types/types";

dayjs.extend(LocalizedFormat);
// Composant principal pour l'affichage d'une carte météo.
// @param data Données météo de la ville (voir type cityData)
const WeatherCard = ({ data }: { data: cityData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cityName}>
        {data.location.name}, {data.location.country}
      </Text>
      <Text>{dayjs.unix(data.location.localtime_epoch).format("LLLL")}</Text>
      <Image
        source={{ uri: `https:${data.current.condition.icon}`, width: 64, height: 64 }}
        style={styles.icon}
      />
      <Text style={styles.temperature}>{data.current.temp_c}°C</Text>
      <Text style={styles.description}>{data.current.condition.text}</Text>
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
