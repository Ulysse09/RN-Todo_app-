import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My to do app  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    height: 80,
    backgroundColor: "coral",
    marginTop: 10,
    flexDirection: "row",
    justifyContent:"center",
    width: "full",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign:"center",
     
  },
});
