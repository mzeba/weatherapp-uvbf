import { StyleSheet, Text, View } from "react-native";

export default function ErrorMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ville non trouvée. Veuillez réessayer.</Text>
    </View>
  );
}

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
