import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Display = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        }, [])
    });


    const cardItems = [
      { name: 'Words', image: require('../public/quran-holder.png') },
      { name: 'Question1', image: require('../public/gradiant-quran-holder.png') },
      { name: 'Choices', image: require('../public/al-quran-preview.png') },
      { name: 'Dashboard', image: require('../public/light.png') },
    ];


return (
  <View className="flex-1 p-4">
  <Text className="text-3xl justify-center flex-1 text-center pt-12 ">Quranic Bangla</Text>

    <View className="flex-row mb-4">
    
      <CardItem item={cardItems[0]} />
      <CardItem item={cardItems[1]} />
    </View>
    <View className="flex-row mb-4">
      <CardItem item={cardItems[2]} />
      <CardItem item={cardItems[3]} />
    </View>
  </View>  );
};

const CardItem = ({ item }) => {
 
  const navigation = useNavigation();
  const itemName  =  item.name;
  const screenName = itemName.replace(/\s/g, '');

return(
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View className="w-40 h-48  p-4 bg-gray-600  border-1 mr-4 justify-center ">
    <Image source={item.image} className="w-10 h-10 object-cover justify-center rounded-lg" /> 
    <Text className="text-xl text-white font-bold">{item.name}</Text>
  </View>
    </TouchableOpacity>
);

};

export default Display;