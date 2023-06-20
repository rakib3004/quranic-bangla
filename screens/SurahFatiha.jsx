import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-web";

const SurahFatiha = () => {
  const quranicData = [
    {
      arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
      bangla: "পরম করুণাময় অতি দয়ালু আল্লাহর নামে।",
      english: "In the Name of Allah—the Most Compassionate, Most Merciful.",
    },
    {
      arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
      bangla: "সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব।",
      english: "All praise is for Allah—Lord of all worlds,",
    },
    {
      arabic: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
      bangla: "দয়াময়, পরম দয়ালু, পরম করুণাময়, অতি দয়ালু।",
      english: "the Most Compassionate, Most Merciful,",
    },
    {
      arabic: "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
      bangla: "বিচার দিবসের মালিক।",
      english: "Master of the Day of Judgment.",
    },
    {
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      bangla: "আপনারই আমরা ইবাদাত করি এবং আপনারই নিকট আমরা সাহায্য চাই।",
      english: "You ˹alone˺ we worship and You ˹alone˺ we ask for help.",
    },
    {
      arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
      bangla: "আমাদেরকে সরল পথ দেখান। পথের হিদায়াত দিন।",
      english: "Guide us along the Straight Path,",
    },
    {
      arabic:
        "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
      bangla:
        "তাদের পথ, যাদের উপর আপনি অনুগ্রহ করেছেন। যাদেরকে নিয়ামত দিয়েছেন।যাদের উপর (আপনার) ক্রোধ আপতিত হয়নি এবং যারা পথভ্রষ্টও নয়।",
      english:
        "the Path of those You have blessed—not those You are displeased with, or those who are astray.",
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
      <Text className="text-center font-semibold text-4xl">Surah Fatiha</Text>
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
export default SurahFatiha;
