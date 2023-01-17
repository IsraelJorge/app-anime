import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Routes } from "./src/routes";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 bg-slate-900">
        <StatusBar style="auto" />
        <Routes />
        <Toast visibilityTime={2000} />
      </View>
    </QueryClientProvider>
  );
}
