import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./App/navigation/AuthNavigator";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";

// const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator initialRouteName="ListingsScreen">
//     <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
//     <Stack.Screen
//       name="ListingDetailsScreen"
//       component={ListingDetailsScreen}
//     />
//   </Stack.Navigator>
// );

// const TabsNavigator = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen name="Feed" component={StackNavigator} />
//     <Tabs.Screen name="+" component={ListingEditScreen} />
//     <Tabs.Screen name="Account" component={AccountScreen} />
//   </Tabs.Navigator>
// );

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
