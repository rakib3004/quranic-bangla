
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import SurahAsor from './screens/surahs/SurahAsor';
import SurahFatiha from './screens/surahs/SurahFatiha';
import SurahIkhlas from './screens/surahs/SurahIkhlas';
import SurahKawthar from './screens/surahs/SurahKawthar';
import SurahNas from './screens/surahs/SurahNas';
import SurahNasr from './screens/surahs/SurahNasr';


const Stack = createNativeStackNavigator();

const App = () =>{

return (
  <TailwindProvider>
  <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SurahNasr" component={SurahNasr} />
        <Stack.Screen name="SurahAsor" component={SurahAsor} />
        <Stack.Screen name="SurahKawthar" component={SurahKawthar} />
        <Stack.Screen name="SurahFatiha" component={SurahFatiha} />
        <Stack.Screen name="SurahIkhlas" component={SurahIkhlas} />
        <Stack.Screen name="SurahNas" component={SurahNas} />
      </Stack.Navigator>
  </NavigationContainer>
  </TailwindProvider>
);
};
export default App;