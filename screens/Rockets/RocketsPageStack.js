import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RocketStack = createNativeStackNavigator();

import RocketsList from "./RocketsList";
import Rocket from "./Rocket";

export default function RocketsPageStack() {
  return (
    <RocketStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RocketStack.Screen
        name="RocketsList"
        component={RocketsList}
      />

      <RocketStack.Screen
        name="Rocket"
        component={Rocket}
        options={{
          headerStyle: {
            backgroundColor: '#171717'
          },
          headerTintColor: 'white',
          headerShown: true,
        }}
      />
    </RocketStack.Navigator>
  );
}
