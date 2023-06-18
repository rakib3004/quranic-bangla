import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        }, [])
    });

    const navigateToAnotherScreen = (item) =>{
      if(item.name==="Surah Asor"){
        navigation.navigate("Surah Asor")
      }
      else if(item.name==="Surah Fatiha"){
        navigation.navigate("Surah Fatiha")

      }
      else if(item.name==="Ayatul Kursi"){
        navigation.navigate("Ayatul Kursi")

      }
      else if(item.name==="Surah Ikhlas"){
        navigation.navigate("Surah Ikhlas")

      }
      else if(item.name==="Surah Bakarah"){
        navigation.navigate("Surah Bakarah")

      }
      else if(item.name==="Surah Nas"){
        navigation.navigate("Surah Nas")

      }
    }

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
  <Text className="text-3xl font-mono justify-center flex-1 text-center pt-12 ">Quranic Bangla </Text>
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
  <TouchableOpacity onPress={navigateToAnotherScreen(item)}>
      <View className="w-40 h-48  p-4 bg-gray-600  border-1 mr-4 justify-center ">
    <Image source={item.image} className="w-10 h-10 object-cover justify-center rounded-lg" /> 
    <Text className="text-xl text-white font-bold">{item.name}</Text>
  </View>
    </TouchableOpacity>
  
);
export default HomeScreen;