import { useState } from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useData } from "../hooks/data.context";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { fetchData } = useData();

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
