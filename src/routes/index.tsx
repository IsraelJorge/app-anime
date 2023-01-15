import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import colors from "tailwindcss/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.slate[900],
  },
};

export const Routes = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
};
