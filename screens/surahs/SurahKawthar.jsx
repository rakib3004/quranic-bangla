import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


const SurahKawthar = () => {
  const quranicData = [
    {
      arabic: "إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ",
      bangla: "নিশ্চয় আমি তোমাকে আল-কাউসার দান করেছি।",
      english: "Indeed, We have granted you ˹O Prophet˺ abundant goodness.",
    },
    {
      arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
      bangla: "অতএব তোমার রবের উদ্দেশ্যেই সালাত পড় এবং নহর কর*। *অর্থ কুরবানী কর।",
      english: "So pray and sacrifice to your Lord ˹alone˺.",
    },
    {
      arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
      bangla: "নিশ্চয় তোমার প্রতি শত্রুতা পোষণকারীই নির্বংশ।",
      english: "Only the one who hates you is truly cut off ˹from any goodness˺.",
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

      <Text className="text-center font-semibold text-4xl">Surah Kawthar</Text>
      <TouchableOpacity className="text-5xl" onPress={() => navigation.navigate("Home")}>
      <Text className="text-xl text-orange-500">   Back   </Text>

      </TouchableOpacity>

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
export default SurahKawthar;
