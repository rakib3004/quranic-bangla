import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";
import { Button } from "react-native-web";

const SurahAdiyat = () => {
  const quranicData = [
    {
      arabic: "وَالۡعٰدِيٰتِ ضَبۡحًا",
      bangla: "কসম ঊর্ধশ্বাসে ছুটে যাওয়া অশ্বরাজির,",
      english: "’ By the galloping, panting horses,",
    },
    {
      arabic: "فَالۡمُوۡرِيٰتِ قَدۡحًا",
      bangla: "অতঃপর যারা ক্ষুরাঘাতে অগ্নি-স্ফূলিঙ্গ ছড়ায়,",
      english: "striking sparks of fire ˹with their hoofs",
    },
    {
        arabic: "فَالۡمُغِيۡرٰتِ صُبۡحًا",
        bangla: "অতঃপর যারা প্রত্যুষে হানা দেয়",
        english: "launching raids at dawn,",
    },
    {
        arabic: "فَاَثَرۡنَ بِهٖ نَقۡعًا",
        bangla: "অতঃপর সে তা দ্বারা ধুলি উড়ায়",
        english: "stirring up ˹clouds of˺ dust,",
    },
    {
      arabic: "فَوَسَطۡنَ بِهٖ جَمۡعًا",
      bangla: "অতঃপর এর দ্বারা শত্রুদলের ভেতরে ঢুকে পড়ে",
      english: "and penetrating into the heart of enemy lines!",
    },
    {
      arabic: "اِنّ الۡاِنۡسَانَ لِرَبِّهٖ لَـكَنُوۡدٌ",
      bangla: "নিশ্চয় মানুষ তার রবের প্রতি বড়ই অকৃতজ্ঞ।",
      english: "Surely humankind is ungrateful to their Lord—",
    },
    {
      arabic: "وَاِنَّهٗ عَلٰى ذٰلِكَ لَشَهِيۡدٌ",
      bangla: "আর নিশ্চয় সে এর উপর (স্বয়ং) সাক্ষী হয়।",
      english: "and they certainly attest to this",
    },
    {
      arabic: "وَاِنَّهٗ لِحُبِّ الۡخَيۡرِ لَشَدِيۡدٌ",
      bangla: "আর নিশ্চয় ধন-সম্পদের লোভে সে প্রবল।",
      english: "and they are truly extreme in their love of ˹worldly˺ gains",
    },
    {
      arabic: "اَفَلَا يَعۡلَمُ اِذَا بُعۡثِرَ مَا فِى الۡقُبُوۡرِ",
      bangla: "তবে কি সে জানে না যখন কবরে যা আছে তা উত্থিত হবে?",
      english: "Do they not know that when the contents of the graves will be spilled out",
    },
    {
      arabic: "وَحُصِّلَ مَا فِى الصُّدُوۡرِ",
      bangla: "আর অন্তরে যা আছে তা প্রকাশিত হবে",
      english: "and the secrets of the hearts will be laid bare",
    },
    {
      arabic: "اِنَّ رَبَّهُمۡ بِهِمۡ يَوۡمَٮِٕذٍ لَّخَبِيۡرٌ",
      bangla: "নিশ্চয় তোমার রব সেদিন তাদের ব্যাপারে সবিশেষ অবহিত",
      english: "surely their Lord is All-Aware of them on that Day",
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

      <Text className="text-center font-semibold text-4xl">Surah Adiyat</Text>
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
export default SurahAdiyat;
