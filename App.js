import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="ResultShow"
          component={ResultShowScreen}
          options={{ title: "Result show " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
