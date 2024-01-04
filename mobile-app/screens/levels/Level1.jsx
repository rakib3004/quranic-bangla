import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Word1 from "../words/Word1";
import Word2 from "../words/Word2";
import Word3 from "../words/Word3";
import Question1 from "../questions/Question1";
import { useNavigation } from "@react-navigation/native";
import Display from "../../app/Display";

const Level1 = () => {
  const navigation = useNavigation();

  return (
    <View>
    <Display/>

      {/* <Word1 />
      <Word2 />
      <Word3 />
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
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="text-xl text-orange-500">{"<-"} হোম </Text>
          </TouchableOpacity>
        </View>
      </View> */}
      {/* <Question1/> */}
    </View>
  );
};

export default Level1;
