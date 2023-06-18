import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";

const AyatulKursi = () => {
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
      <Text className="text-center font-semibold text-2xl">Ayatul Kursi</Text>
    </View>
  );
};
export default AyatulKursi;
