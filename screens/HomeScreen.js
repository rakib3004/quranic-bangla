import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        }, [])
    })
  return (
    <View>
      <Text className="text-red-800 font-semibold text-center">HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;