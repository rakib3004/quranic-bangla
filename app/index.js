import surah105 from '../public/105.png';
import surah106 from '../public/106.png';
import surah107 from '../public/107.png';
import surah108 from '../public/108.png';
import surah109 from '../public/109.png';
import surah110 from '../public/110.png';
import surah111 from '../public/111.png';
import surah112 from '../public/112.png';
import surah113 from '../public/113.png';
import surah114 from '../public/114.png';
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const App = () => {
    const cards = [
      { image: surah105, text: 'Al-Fil' },
      { image: surah106, text: 'Quraysh' },
      { image: surah107, text: 'Al-Ma\'un' },
      { image: surah108, text: 'Al-Kawthar' },
      { image: surah109, text: 'Al-Kafirun' },
      { image: surah110, text: 'An-Nasr' },
      { image: surah111, text: 'Lahab' },
      { image: surah112, text: 'Al-Ikhlas' },
      { image: surah113, text: 'Al-Falaq' },
      { image: surah114, text: 'An-Nas' },
    ];

  return (
    <View style={styles.container}>
      <Text style={styles.titleText} >Quranic Bangla</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {cards.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Image source={item.image} style={styles.buttonImage} />
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
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
