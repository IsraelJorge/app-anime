import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
