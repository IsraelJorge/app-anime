import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
