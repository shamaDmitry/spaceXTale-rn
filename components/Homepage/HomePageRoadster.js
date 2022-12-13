import React from 'react';

import { ImageBackground, Pressable, Text, View } from 'react-native';
import roadsterImg from "../../assets/images/home/roadster-bg.jpg";

const HomePageRoadster = () => {
  return (
    <ImageBackground
      className="h-screen items-center"
      source={roadsterImg}
      resizeMode="cover"
    >
      <View className="bg-neutral-900/70 w-full flex-1 p-2 justify-center">
        <Text className="text-white font-bold text-3xl mb-2">
          Starman and his Roadster
        </Text>


        <View className="flex-wrap flex-row">
          <Text className="text-white text-center font-thin text-lg border-b pb-1 inline-flex border-b-blue-500">
            320593736 km
          </Text>

          <Text className="text-white font-thin text-lg mb-5">
            from the Earth and moving away
          </Text>
        </View>


        <Pressable
          className="w-52 py-3 px-4 border-2 border-white"
          onPress={() => {
          }}
        >
          <Text className="text-white font-bold text-center">
            Explore Roadster
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default HomePageRoadster;
