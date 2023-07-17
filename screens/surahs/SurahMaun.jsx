import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahMaun = () => {
  const quranicData = [
    {
      arabic: "اَرَءَيۡتَ الَّذِىۡ يُكَذِّبُ بِالدِّيۡنِ",
      bangla: "তুমি কি তাকে দেখেছ, যে হিসাব-প্রতিদানকে অস্বীকার করে?",
      english: "Have you seen the one who denies the ˹final˺ Judgment?",
    },
    {
      arabic: "فَذٰلِكَ الَّذِىۡ يَدُعُّ الۡيَتِيۡمَ",
      bangla: "সে-ই ইয়াতীমকে কঠোরভাবে তাড়িয়ে দেয়,",
      english: "That is the one who repulses the orphan,",
    },
    {
        arabic: "وَ لَا يَحُضُّ عَلٰى طَعَامِ الۡمِسۡكِيۡنِ",
        bangla: "আর মিসকীনকে খাদ্যদানে উৎসাহ দেয় না।",
        english: "and does not encourage the feeding of the poor.",
    },
    {
        arabic: "فَوَيۡلٌ لِّلۡمُصَلِّيۡنَ",
        bangla: "অতএব সেই সালাত আদায়কারীদের জন্য দুর্ভোগ,",
        english: "So woe to those ˹hypocrites˺ who pray",
    },   
    {
      arabic: "الَّذِيۡنَ هُمۡ عَنۡ صَلَاتِهِمۡ سَاهُوۡنَ",
      bangla: "yet are unmindful of their prayers;",
      english: "যারা নিজদের সালাতে অমনোযোগী,",
    },
    {
        arabic: "الَّذِيۡنَ هُمۡ يُرَآءُوۡنَ",
        bangla: "যারা লোক দেখানোর জন্য তা করে,",
        english: "those who ˹only˺ show off,",
    },
    {
        arabic: "وَيَمۡنَعُوۡنَ الۡمَاعُوۡنَ",
        bangla: "এবং ছোট-খাট গৃহসামগ্রী* দানে নিষেধ করে। *ماعون গৃহস্থালীর ছোট-খাট সামগ্রী। যেমন, পানি, লবণ, দিয়াশলাই, বালতি ইত্যাদি।",
        english: "and refuse to give ˹even the simplest˺ aid.",
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

      <Text className="text-center font-semibold text-4xl">Surah Maun</Text>
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
export default SurahMaun;
