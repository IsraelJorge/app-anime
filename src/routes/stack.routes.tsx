import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimeDetails } from "../screens/AnimeDetails";
import { Home } from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="animeDetails" component={AnimeDetails} />
    </Navigator>
  );
}
