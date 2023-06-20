import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahBakarah = () => {
  const quranicData = [
    {
      arabic: "",
      bangla: "",
      english: "",
    },
    {
      arabic: "",
      bangla: "",
      english: "",
    },
    {
      arabic: "",
      bangla: "",
      english: "",
    },
  ];
    const navigation = useNavigation();
useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });
  return (
   
    <View >
      <Text className="text-center font-semibold text-4xl">Surah Bakarah</Text>
      <Button className="w-1/4 h-auto text-black bg-blue-800" onPress={() => navigation.navigate("Home")}>Go To Home</Button>

      {quranicData.map((ayat, index) => (
        <View
          key={index}
          className="bg-white w-1/2 border-white rounded-lg shadow-lg px-6 py-6 my-4 flex justify-center items-center"
        >
          <Text className="text-center text-md">{ayat.arabic}</Text>
          <Text className="text-center text-md">{ayat.bangla}</Text>
          <Text className="text-center text-md">{ayat.english}</Text>
        </View>
      ))}
    </View >

  );
};
export default SurahBakarah;
