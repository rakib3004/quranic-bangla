import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahIkhlas = () => {
  const quranicData = [
    {
      arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌmc",
      bangla: "বল, তিনিই আল্লাহ, এক-অদ্বিতীয়।",
      english: "Say, ˹O Prophet,˺ “He is Allah—One ˹and Indivisible˺;",
    },
    {
      arabic: "ٱللَّهُ ٱلصَّمَدُ ٢",
      bangla: "আল্লাহ কারো মুখাপেক্ষী নন, সকলেই তাঁর মুখাপেক্ষী।",
      english: "Allah—the Sustainer ˹needed by all˺.",
    },
    {
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      bangla: "তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেয়া হয়নি।",
      english: "He has never had offspring, nor was He born.",
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
      <Text className="text-center font-semibold text-4xl">Surah Ikhlas</Text>
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
export default SurahIkhlas;
