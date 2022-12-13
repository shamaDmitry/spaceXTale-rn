import React from 'react';

import { ImageBackground, Pressable, Text, View } from 'react-native';
import starlinkImg from "../../assets/images/home/starlink-bg.jpeg";

const HomePageStarlink = () => {
  return (
    <ImageBackground
      className="h-screen items-center"
      source={starlinkImg}
      resizeMode="cover"
    >
      <View className="bg-neutral-900/70 w-full flex-1 p-2 justify-center">
        <Text className="text-white font-bold text-3xl mb-2">
          Starlink
        </Text>

        <Text className="text-white font-thin text-lg m-0">
          Colossal constellation of 3526 low-orbit satellites to provide low latency, broadband internet system
        </Text>

        <Text className="text-white font-thin text-lg m-0">
          Detailed info about coordinates and motion of all starlink satellites
        </Text>

        <Text>
          Data Updated Hourly
        </Text>

        <Pressable
          className="w-52 py-3 px-4 border-2 border-white"
          onPress={() => {
          }}
        >
          <Text className="text-white font-bold text-center">
            Explore Starlink
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default HomePageStarlink;
