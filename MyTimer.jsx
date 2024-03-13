import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TimeSetter from "./TimeSetter";

const MyTimer = () => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (timerRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
          setTimerRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timerRunning, minutes, seconds]);

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{minutes}</Text>
        <Text style={styles.timerText}>:</Text>
        <Text style={styles.timerText}>{seconds}</Text>
      </View>
      <TimeSetter
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setTimerRunning={setTimerRunning}
      />
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
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});

export default MyTimer;
