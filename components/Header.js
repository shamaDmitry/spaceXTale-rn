import React from 'react';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Pressable, Text, View } from 'react-native';

const Header = ({navigation}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';

  return (
    <View className="bg-neutral-900 flex-row items-center px-2 py-1">
      <Pressable
        onPress={() => navigation.openDrawer()}
      >
        {
          ({pressed}) => {
            return (
              <View
                className={`h-6 w-5 justify-between ${pressed ? 'opacity-50' : null}`}
              >
                <View className={`top-1 w-full h-0.5 bg-white`} />

                <View className={`h-0.5 w-full bg-white`} />

                <View className={`bottom-1 w-full h-0.5 bg-white`} />
              </View>
            )
          }
        }
      </Pressable>

      <Text
        className="font-thin text-white text-3xl px-3 py-1"
        onPress={() => navigation.navigate('Home')}
      >
        spaceXtale
      </Text>
    </View>
  );
};

export default Header;
