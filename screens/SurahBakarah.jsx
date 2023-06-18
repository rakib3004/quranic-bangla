import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";

const SurahBakarah = () => {
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
      <Text className="text-center font-semibold text-2xl">Surah Bakarah</Text>
    </View>
  );
};
export default SurahBakarah;
