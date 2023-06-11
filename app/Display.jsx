import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Display = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Quranic Bangla</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>আয়াতুল কুরসি</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>সুরা ফাতিহা</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>সুরা ইখলাস</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>সুরা আসর </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>সুরা বাকারার ১ম পাঁচ আয়াত</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Display;

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
    borderRadius: "0.5rem",
    width: 500,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    display: "flex",
    alignContent: "center",
    textAlign: "center",
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleText: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 500,
    fontSize: 35,
    marginBottom: 50,
  },
});
