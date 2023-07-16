import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahNas = () => {
  const quranicData = [
    {
      arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      bangla: "বল, ‘আমি আশ্রয় চাই মানুষের রব,",
      english: "Say, ˹O Prophet,˺ “I seek refuge in the Lord of humankind,",
    },
    {
      arabic: "مَلِكِ ٱلنَّاسِ",
      bangla: "মানুষের অধিপতি,",
      english: "the Master of humankind,",
    },
    {
      arabic: "إِلَـٰهِ ٱلنَّاسِ",
      bangla: "মানুষের ইলাহ-এর কাছে,",
      english: "the God of humankind,",
    },
    {
      arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
      bangla: "কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে দ্রুত আত্মগোপন করে।",
      english: "from the evil of the lurking whisperer—",
    },
    {
      arabic: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
      bangla: "যে মানুষের মনে কুমন্ত্রণা দেয়।",
      english: "who whispers into the hearts of humankind—",
    },
    {
      arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
      bangla: "জিন ও মানুষ থেকে।”",
      english: "from among jinn and humankind.",
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
      <Text className="text-center font-semibold text-4xl">Surah Nas</Text>
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
export default SurahNas;
