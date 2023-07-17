import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahAsr = () => {
  const quranicData = [
    {
      arabic: "وَٱلْعَصْرِ",
      bangla: "সময়ের কসম,",
      english: "By the ˹passage of˺ time!",
    },
    {
      arabic: "إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ",
      bangla: "নিশ্চয় সকল মানুষ ক্ষতিগ্রস্ততায় নিপতিত।",
      english: "Surely humanity is in ˹grave˺ loss,",
    },
    {
      arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ",
      bangla: "তবে তারা ছাড়া যারা ঈমান এনেছে, সৎকাজ করেছে, পরস্পরকে সত্যের উপদেশ দিয়েছে এবং পরস্পরকে ধৈর্যের উপদেশ দিয়েছে।",
      english: "except those who have faith, do good, and urge each other to the truth, and urge each other to perseverance.",
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
      <Text className="text-center font-semibold text-4xl">Surah Asr</Text>
      <Button className="w-200 h-auto text-black bg-blue-800" onPress={() => navigation.navigate("Home")}>Go To Home</Button>

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
export default SurahAsr;
