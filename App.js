
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import Level1 from './screens/levels/Level1';
import Level2 from './screens/levels/Level2';
import Level3 from './screens/levels/Level3';
import Level4 from './screens/levels/Level4';
import Level5 from './screens/levels/Level5';
import Level6 from './screens/levels/Level6';
import Word1 from './screens/words/Word1';
import Word2 from './screens/words/Word2';
import Word3 from './screens/words/Word3';

const Stack = createNativeStackNavigator();

const App = () =>{

return (
  <TailwindProvider>
  <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Level1" component={Level1} />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
        <Stack.Screen name="Level4" component={Level4} />
        <Stack.Screen name="Level5" component={Level5} />
        <Stack.Screen name="Level6" component={Level6} />
        <Stack.Screen name="Word1" component={Word1} />
        <Stack.Screen name="Word2" component={Word2} />
        <Stack.Screen name="Word3" component={Word3} />


       
      </Stack.Navigator>
  </NavigationContainer>
  </TailwindProvider>
);
};
export default App;