import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Word1 from "../words/Word1";
import Word2 from "../words/Word2";
import Word3 from "../words/Word3";

const Words = () => {
  const navigation = useNavigation();

  return (
    <View>
    <View className="flex flex-row justify-between">
        <View>
          <TouchableOpacity
            className="text-5xl"
            onPress={() => navigation.navigate("Question1")}
          >
            <Text className="text-xl text-orange-500"> পরবর্তী {"->"} </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="text-5xl"
            onPress={() => navigation.navigate("Display")}
          >
            <Text className="text-xl text-orange-500">{"<-"} মেন্যু </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Word1 />
      <Word2 />
      <Word3 />
      
    </View>
  );
};

export default Words;
