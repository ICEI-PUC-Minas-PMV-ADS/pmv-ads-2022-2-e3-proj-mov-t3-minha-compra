import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from 'react-native';

import Login from "./src/views/Login";
import Home from "./src/views/Home";
import Lista from "./src/views/Lista";
import Produto from "./src/views/Produto";
import Statistic from "./src/views/Statistic";
import Navigation from "./src/views/Navigation";
import Exemple from "./src/views/Exemple";
import Loading from "./src/views/Loading";
import Profile from "./src/views/Profile";
import Refresh from "./src/views/Refresh";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Refresh"
          component={Refresh}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Listas"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Produto"
          component={Produto}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Statistic"
          component={Statistic}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Exemple"
          component={Exemple}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
