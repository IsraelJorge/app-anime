import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Catalog } from "../screens/Catalog";
import { Search } from "../screens/Search";
import { Home } from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "tailwindcss/colors";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.indigo[800],
        tabBarInactiveTintColor: colors.slate[500],
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colors.slate[300],
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopEndRadius: 20,

          paddingBottom: 5,
          paddingTop: 5,

          elevation: 0,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerTitle: "Wiki Animes",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: colors.slate[900],
            elevation: 0,
          },

          headerTitleStyle: {
            color: colors.slate[300],
            fontSize: 23,
            fontWeight: "700",
          },
        }}
      />

      <Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="catalog"
        component={Catalog}
        options={{
          headerShown: false,
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
