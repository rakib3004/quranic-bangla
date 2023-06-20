import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

const SurahFatiha = () => {
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
    <View>
      <Text className="text-center font-semibold text-4xl">Surah Fatiha</Text>
      <View className="bg-white w-1/2 border-2 rounded-lg shadow-lg px-6 py-6 my-4 flex justify-center items-center">
        <Text className="text-center text-md">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </Text>
        <Text className="text-center text-md">
          In the Name of Allah—the Most Compassionate, Most Merciful.
        </Text>
        <Text className="text-center text-md">
          পরম করুণাময় অতি দয়ালু আল্লাহর নামে।
        </Text>
      </View>

      <View className="bg-white w-1/2 border-2 rounded-lg shadow-lg px-6 py-6 my-4 flex justify-center items-center">
        <Text className="text-center text-md">
        ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ
        </Text>
        <Text className="text-center text-md">
        All praise is for Allah—Lord of all worlds,
        </Text>
        <Text className="text-center text-md">
        সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব।
        </Text>
      </View>

      <View className="bg-white w-1/2 border-2 rounded-lg shadow-lg px-6 py-6 my-4 flex justify-center items-center">
        <Text className="text-center text-md">
        ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </Text>
        <Text className="text-center text-md">
        the Most Compassionate, Most Merciful,
        </Text>
        <Text className="text-center text-md">
        দয়াময়, পরম দয়ালু, পরম করুণাময়, অতি দয়ালু।
        </Text>
      </View>
    </View>
  );
};
export default SurahFatiha;
