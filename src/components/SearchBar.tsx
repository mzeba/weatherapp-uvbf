/**
 * SearchBar Component
 *
 * Champ de recherche permettant à l'utilisateur de saisir une ville et de déclencher la récupération des données météo.
 *
 * @param {{ fetchData: (city: string) => void }} props - Fonction de récupération météo
 * @returns {JSX.Element} Barre de recherche avec champ texte et bouton.
 *
 * Détails :
 * - Utilise TextInput pour la saisie et TouchableOpacity pour le bouton.
 * - Le bouton est désactivé si l'utilisateur est hors ligne.
 * - Styles adaptés pour mobile (Expo/React Native).
 */
import { useState } from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useData } from "../hooks/data.context";
// Composant principal pour la saisie et la recherche d'une ville.
// @param fetchData Fonction de récupération météo (ville : string)
const SearchBar = ({ fetchData }: { fetchData: (city: string) => void }) => {
  const [city, setCity] = useState("");
  const { isConnected } = useData();

  /**
   * Déclenche la recherche météo pour la ville saisie.
   */
  const onSearch = () => {
    fetchData(city);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Entrer un ville"
        placeholderTextColor={"#aaa"}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isConnected ? "#4A90E2" : "#ddd" }]}
        onPress={onSearch}
        disabled={!isConnected}>
        <Text style={styles.buttonText}>Voir la météo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

/**
 * Styles pour le composant SearchBar.
 *
 * NOTE : Styles adaptés pour une intégration harmonieuse dans l'interface mobile.
 */
const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 25,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: "center",
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
