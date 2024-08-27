import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.text}>Você tem {idade} anos</Text>
      <Text style={styles.text}>Seu email é {email}</Text>
      <Text style={styles.text}>Seu nome é {nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
