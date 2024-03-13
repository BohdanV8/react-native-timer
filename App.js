import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyTimer from "./MyTimer";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <MyTimer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;
