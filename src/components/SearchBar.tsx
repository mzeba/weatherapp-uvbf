/**
 * SearchBar Component
 *
 * Champ de recherche permettant à l'utilisateur de saisir une ville et de déclencher la récupération des données météo.
 *
 * @param {(city: string) => void} fetchData - Fonction de rappel pour lancer la recherche météo sur la ville saisie.
 * @returns {JSX.Element} Barre de recherche avec champ texte et bouton d'action.
 *
 * Spécificités Expo/React Native :
 * - Utilise TextInput et TouchableOpacity pour interaction mobile.
 * - Prévu pour affichage sur mobile (iOS/Android).
 */
import { useState } from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

/**
 * Composant principal pour la saisie et la recherche d'une ville.
 * @param fetchData Fonction de récupération des données météo
 */
const SearchBar = ({ fetchData }: { fetchData: (city: string) => void }) => {
  const [city, setCity] = useState("");

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
      <TouchableOpacity style={styles.button} onPress={onSearch}>
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
    backgroundColor: "#4A90E2",
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
