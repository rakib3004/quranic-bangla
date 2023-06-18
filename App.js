
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import AyatulKursi from './screens/AyatulKursi';
import SurahAsor from './screens/SurahAsor';
import SurahBakarah from './screens/SurahBakarah';
import SurahFatiha from './screens/SurahFatiha';
import SurahIkhlas from './screens/SurahIkhlas';
import SurahNas from './screens/SurahNas';


const Stack = createNativeStackNavigator();

const App = () =>{

return (
  <TailwindProvider>
  <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AyatulKursi" component={AyatulKursi} />
        <Stack.Screen name="SurahAsor" component={SurahAsor} />
        <Stack.Screen name="SurahBakarah" component={SurahBakarah} />
        <Stack.Screen name="SurahFatiha" component={SurahFatiha} />
        <Stack.Screen name="SurahIkhlas" component={SurahIkhlas} />
        <Stack.Screen name="SurahNas" component={SurahNas} />
      </Stack.Navigator>
  </NavigationContainer>
  </TailwindProvider>
);
};
export default App;