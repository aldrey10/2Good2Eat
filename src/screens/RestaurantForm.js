import { useState } from "react";
import { Text, View, StyleSheet, Alert, Button } from "react-native"
import { TextInput } from "react-native-gesture-handler";

export const RestaurantForm = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");
  const [bestFood, setBestFood] = useState("")

  const handleSubmit = () => {
    if (!name || !address || !cuisine || !rating) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    Alert.alert("Datos añadidos", `Restaurante: ${name}\nDirección: ${address}\nTipo de comida: ${cuisine}\nCalificación: ${rating}`);
    // Aquí puedes enviar los datos a tu backend o guardarlos en algún lugar.
    
    // Reiniciar el formulario
    setName("");
    setAddress("");
    setCuisine("");
    setRating("");
    setBestFood("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Restaurante"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Lugar"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Comida (Ej: Italiana, Mexicana)"
        value={cuisine}
        onChangeText={setCuisine}
      />
      <TextInput
        style={styles.input}
        placeholder="Plato estrella"
        value={rating}
        onChangeText={bestFood}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Calificación (1-10)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <Button title="Añadir Restaurante" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
