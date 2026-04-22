/**
 * ErrorMessage Component
 *
 * Affiche un message d'erreur lorsque la ville recherchée n'est pas trouvée.
 *
 * @returns {JSX.Element} Message d'erreur formaté pour affichage mobile.
 *
 * Détails :
 * - Affichage centré, message générique.
 * - Styles adaptés pour mobile (Expo/React Native).
 */
import { StyleSheet, Text, View } from "react-native";

// Composant d'affichage d'un message d'erreur générique pour la recherche de ville.
export default function ErrorMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ville non trouvée. Veuillez réessayer.</Text>
    </View>
  );
}

/**
 * Styles pour le composant ErrorMessage.
 *
 * NOTE : Styles adaptés pour un affichage centré et une carte visuelle cohérente avec le reste de l'application.
 */
const styles = StyleSheet.create({
  container: {
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
  text: {
    fontSize: 18,
    color: "#666",
  },
});
