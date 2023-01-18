import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DetailsAnime } from "../screens/AnimeDetails/Details";
import { Trailer } from "../screens/AnimeDetails/Trailer";

const { Navigator, Screen } = createMaterialTopTabNavigator();

import colors from "tailwindcss/colors";

type TabsDetailsPros = {
  synopsis: string;
  idVideo: string;
};

export function TabsDetails({ synopsis, idVideo }: TabsDetailsPros) {
  return (
    <Navigator
      initialRouteName="details"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.indigo[400],
          height: 5,
        },
        tabBarActiveTintColor: colors.indigo[400],
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colors.slate[900],

          paddingBottom: 5,
          paddingTop: 5,

          elevation: 0,
        },
      }}
    >
      <Screen
        name="details"
        component={DetailsAnime}
        initialParams={{ synopsis: synopsis }}
      />
      <Screen
        name="trailer"
        component={Trailer}
        initialParams={{ idVideo: idVideo }}
      />
    </Navigator>
  );
}
