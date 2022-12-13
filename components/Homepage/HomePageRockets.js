import React from 'react';

import { ImageBackground, Pressable, Text, View } from 'react-native';
import rocketsImg from "../../assets/images/home/rockets-bg.jpg";
import { useNavigation } from "@react-navigation/native";

const HomePageRockets = () => {
  const navigator = useNavigation();

  return (
    <ImageBackground
      className="h-screen items-center"
      source={rocketsImg}
      resizeMode="cover"
    >
      <View className="bg-neutral-900/70 w-full flex-1 p-2 justify-center">
        <Text className="text-white font-bold text-3xl mb-2">
          Rockets
        </Text>

        <Text className="text-white font-thin text-lg m-0">
          Rockets are Cool. Theres no getting around that.
        </Text>

        <Text className="text-white font-thin text-lg text-right m-0">
          -Elon Musk
        </Text>

        <Pressable
          android_ripple={{
            color: 'rgba(0, 0, 0, .32)',
            radius: 100,
            // foreground: true,
          }}
          className="w-52 py-3 px-4 border-2 border-white"
          onPress={() => navigator.navigate('Rockets')}
        >
          {
            ({pressed}) => {
              return (
                <Text className={`text-white font-bold text-center ${pressed ? 'opacity-50' : null}`}>
                  Explore All Rockets
                </Text>
              )
            }
          }
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default HomePageRockets;
