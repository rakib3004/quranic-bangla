
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import SurahAdiyat from './screens/surahs/SurahAdiyat'
import SurahAsr from './screens/surahs/SurahAsr';
import SurahFatiha from './screens/surahs/SurahFatiha';
import SurahIkhlas from './screens/surahs/SurahIkhlas';
import SurahKawthar from './screens/surahs/SurahKawthar';
import SurahNas from './screens/surahs/SurahNas';
import SurahNasr from './screens/surahs/SurahNasr';
import SurahBayyinah from './screens/surahs/SurahBayyinah';
import SurahFalaq from './screens/surahs/SurahFalaq';
import SurahHumazah from './screens/surahs/SurahHumazah';
import SurahKafirun from './screens/surahs/SurahKafirun';
import SurahMasad from './screens/surahs/SurahMasad';
import SurahMaun from './screens/surahs/SurahMaun';
import SurahQadr from './screens/surahs/SurahQadr';
import SurahQariah from './screens/surahs/SurahQariah';
import SurahTakathur from './screens/surahs/SurahTakathur';
import SurahTin from './screens/surahs/SurahTin';
import SurahZalzalah from './screens/surahs/SurahZalzalah';


const Stack = createNativeStackNavigator();

const App = () =>{

return (
  <TailwindProvider>
  <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SurahAdiyat" component={SurahAdiyat} />
        <Stack.Screen name="SurahAsr" component={SurahAsr} />
        <Stack.Screen name="SurahBayyinah" component={SurahBayyinah} />
        <Stack.Screen name="SurahFalaq" component={SurahFalaq} />
        <Stack.Screen name="SurahFatiha" component={SurahFatiha} />
        <Stack.Screen name="SurahFil" component={SurahFil} />
        <Stack.Screen name="SurahHumazah" component={SurahHumazah} />
        <Stack.Screen name="SurahIkhlas" component={SurahIkhlas} />
        <Stack.Screen name="SurahKafirun" component={SurahKafirun} />
        <Stack.Screen name="SurahKawthar" component={SurahKawthar} />
        <Stack.Screen name="SurahMasad" component={SurahMasad} />
        <Stack.Screen name="SurahMaun" component={SurahMaun} />
        <Stack.Screen name="SurahNas" component={SurahNas} />
        <Stack.Screen name="SurahNasr" component={SurahNasr} />
        <Stack.Screen name="SurahQadr" component={SurahQadr} />
        <Stack.Screen name="SurahQariah" component={SurahQariah} />
        <Stack.Screen name="SurahTakathur" component={SurahTakathur} />
        <Stack.Screen name="SurahTin" component={SurahTin} />
        <Stack.Screen name="SurahZalzalah" component={SurahZalzalah} />
      </Stack.Navigator>
  </NavigationContainer>
  </TailwindProvider>
);
};
export default App;