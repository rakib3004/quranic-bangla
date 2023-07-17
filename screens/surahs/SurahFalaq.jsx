import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahFalaq = () => {
  const quranicData = [
    {
      arabic: "قُلۡ اَعُوۡذُ بِرَبِّ الۡفَلَقِ",
      bangla: "বল, ‘আমি আশ্রয় প্রার্থনা করছি ঊষার রবের কাছে,",
      english: "Say, ˹O Prophet,˺ “I seek refuge in the Lord of the daybreak",
    },
    {
      arabic: "مِنۡ شَرِّ مَا خَلَقَ",
      bangla: "তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে,",
      english: "from the evil of whatever He has created",
    },
    {
        arabic: "وَمِنۡ شَرِّ غَاسِقٍ اِذَا وَقَبَ",
        bangla: "আর রাতের অন্ধকারের অনিষ্ট থেকে যখন তা গভীর হয়",
        english: "and from the evil of the night when it grows dark",
    },
    {
        arabic: "وَمِنۡ شَرِّ النَّفّٰثٰتِ فِى الۡعُقَدِ",
        bangla: "আর গিরায় ফুঁ-দানকারী নারীদের অনিষ্ট থেকে,",
        english: "and from the evil of those ˹witches casting spells by˺ blowing onto knots",
    }, 
    {
      arabic: "وَمِنۡ شَرِّ حَاسِدٍ اِذَا حَسَدَ",
      bangla: "and from the evil of an envier when they envy",
      english: "আর হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে",
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

      <Text className="text-center font-semibold text-4xl">Surah Falaq</Text>
      <Button className="" onPress={() => navigation.navigate("Home")}>Go To Home</Button>

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
export default SurahFalaq;
