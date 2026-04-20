import { StyleSheet, Text, View } from "react-native";

import { cityData } from "../types/types";

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
