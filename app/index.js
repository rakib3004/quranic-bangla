
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Display from "./Display";



const App = () =>{
  const cards = [
    { text: 'নবীদের নিয়ে আয়াত সমূহ' },
    { text: 'আয়াতুল কুরসি' },
    {  text: 'সুরা ফাতিহা' },
    { text: 'আয়াতুল কুরসি' },
    {  text: '৫ টি দোয়া' },
  ];

return (
  <View style={styles.container}>
    <Text style={styles.titleText} >Quranic Bangla</Text>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    {cards.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollContainer: {
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 220,
    backgroundColor: "#088395",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: "0.25rem",
    width:500,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    display: "flex",
    alignContent: "center",
    textAlign: "center",
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleText : {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 270,
    fontSize: 35,

  }
});
