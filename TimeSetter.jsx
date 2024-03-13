import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const TimeSetter = ({ setMinutes, setSeconds, setTimerRunning }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Хвилини:</Text>
        <TextInput
          style={styles.input}
          placeholder="Хвилини"
          keyboardType="numeric"
          onChangeText={(text) => setMinutes(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Секунди:</Text>
        <TextInput
          style={styles.input}
          placeholder="Секунди"
          keyboardType="numeric"
          onChangeText={(text) => setSeconds(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Start"
          onPress={() => setTimerRunning(true)}
          color="dark"
        />
        <Button
          title="Stop"
          onPress={() => setTimerRunning(false)}
          color="dark"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    marginLeft: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
});

export default TimeSetter;
