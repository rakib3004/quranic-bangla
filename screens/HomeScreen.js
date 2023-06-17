import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        }, [])
    });

    const cardItems = [
      { name: 'Surah Asor', image: require('../public/first.png') },
      { name: 'Surah Fatiha', image: require('../public/third.png') },
      { name: 'Ayatul Kursi', image: require('../public/second.png') },
      { name: 'Surah Ikhlas', image: require('../public/first.png') },
      { name: 'Surah Bakarah', image: require('../public/second.png') },
      { name: 'Surah Nas', image: require('../public/third.png') },
    ];


return (
  <View className="flex-1 p-4">
    <View className="flex-row mb-4">
      <CardItem item={cardItems[0]} />
      <CardItem item={cardItems[1]} />
    </View>
    <View className="flex-row mb-4">
      <CardItem item={cardItems[2]} />
      <CardItem item={cardItems[3]} />
    </View>
    <View className="flex-row mb-4">
      <CardItem item={cardItems[4]} />
      <CardItem item={cardItems[5]} />
    </View>
  </View>  );
};

const CardItem = ({ item }) => (
  <View className="w-1/2 p-4 bg-green-800 border-1">
      {/* <Image src={item.image} className="w-5 h-5 object-cover rounded-lg" /> */}
    <Text className="text-xl font-bold mt-2">{item.name}</Text>
  </View>
);
export default HomeScreen;