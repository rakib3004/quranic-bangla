import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahNasr = () => {
  const quranicData = [
    {
      arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ",
      bangla: "যখন আল্লাহর সাহায্য ও বিজয় আসবে,",
      english: "When Allah’s ˹ultimate˺ help comes and the victory ˹over Mecca is achieved˺,",
    },
    {
      arabic: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًۭا",
      bangla: "আর তুমি লোকদেরকে দলে দলে আল্লাহর দীনে দাখিল হতে দেখবে,",
      english: "and you ˹O Prophet˺ see the people embracing Allah’s Way in crowds,",
    },
    {
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۢا",
      bangla: "তখন তুমি তোমার রবের সপ্রশংস তাসবীহ পাঠ কর এবং তাঁর কাছে ক্ষমা চাও নিশ্চয় তিনি তাওবা কবূলকারী।",
      english: "then glorify the praises of your Lord and seek His forgiveness, for certainly He is ever Accepting of Repentance.",
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
      <Text className="text-center font-semibold text-4xl">Surah Nasr</Text>
      <Button className="px-4 py-2 text-white bg-green-500 border-gray-700 rounded-md shadow-lg border-1" onPress={() => navigation.navigate("Home")}>Go To Home</Button>

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
export default SurahNasr;
