import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={ {
      flex: 1,
      padding: 20,
    }}>
      <View style={{ flex: 1, backgroundColor: "orange" }} />
      <View style={{ flex: 1, backgroundColor: "yellow" }} />
      <View style={{ flex: 1, backgroundColor: "lightblue" }} />
    </View>
  );
};

export default App;