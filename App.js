import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "./screens/Home";
import Launches from "./screens/Launches";
import Starlink from "./screens/Starlink";
import Roadster from "./screens/Roadster";
import Info from "./screens/Info";
import React from "react";
import { StatusBar } from "react-native";
import RocketsPageStack from "./screens/Rockets/RocketsPageStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <Drawer.Navigator
        initialRouteName="Rockets"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{}}
        />
        <Drawer.Screen
          name="Launches"
          component={Launches}
        />
        <Drawer.Screen
          name="Rockets"
          component={RocketsPageStack}
        />
        <Drawer.Screen
          name="Starlink"
          component={Starlink}
        />
        <Drawer.Screen
          name="Roadster"
          component={Roadster}
        />
        <Drawer.Screen
          name="Info"
          component={Info}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
