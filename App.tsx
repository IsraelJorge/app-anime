import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View className="flex-1 px-3 pt-16 pb-3 bg-sky-700">
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}
