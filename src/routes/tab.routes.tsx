import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "tailwindcss/colors";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.indigo[800],
        tabBarInactiveTintColor: colors.slate[500],
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colors.slate[300],
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
