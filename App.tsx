import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Routes } from "./src/routes";
import Toast from "react-native-toast-message";
import * as Network from "expo-network";

export default function App() {
  const handleConectedNetwork = async () => {
    const { isConnected } = await Network.getNetworkStateAsync();

    if (!isConnected) {
      Toast.show({
        type: "error",
        text1: "No network",
      });
    }
  };

  useEffect(() => {
    handleConectedNetwork();
  }, [handleConectedNetwork]);

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="auto" />
      <Routes />
      <Toast visibilityTime={2000} />
    </View>
  );
}
