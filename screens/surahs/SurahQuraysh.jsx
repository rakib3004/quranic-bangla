import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahQuraysh = () => {
  const quranicData = [
    {
      arabic: "لِإِيلَـٰفِ قُرَيْشٍ",
      bangla: "যেহেতু কুরাইশ অভ্যস্ত,",
      english: "˹At least˺ for ˹the favour of˺ making Quraysh habitually secure—",
    },
    {
      arabic: "إِۦلَـٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
      bangla: "শীত ও গ্রীষ্মের সফরে তারা অভ্যস্ত হওয়ায়।",
      english: "secure in their trading caravan ˹to Yemen˺ in the winter and ˹Syria˺ in the summer—",
    },
    {
        arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَـٰذَا ٱلْبَيْتِ",
        bangla: "অতএব তারা যেন এ গৃহের রবের ‘ইবাদাত করে,",
        english: "let them worship the Lord of this ˹Sacred˺ House,",
    },
    {
        arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍۢ وَءَامَنَهُم مِّنْ خَوْفٍۭ",
        bangla: "যিনি ক্ষুধায় তাদেরকে আহার দিয়েছেন আর ভয় থেকে তাদেরকে নিরাপদ করেছেন।",
        english: "Who has fed them against hunger and made them secure against fear.",
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

      <Text className="text-center font-semibold text-4xl">Surah Quraysh</Text>
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
export default SurahQuraysh;
