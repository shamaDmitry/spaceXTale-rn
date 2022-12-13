import React from 'react';

import { ImageBackground, Pressable, Text, View } from 'react-native';
import launchesImg from "../../assets/images/home/launches-bg.jpg";

const HomePageLaunches = (props) => {
  return (
    <ImageBackground
      className="h-screen items-center"
      source={launchesImg}
      resizeMode="cover"
    >
      <View className="bg-neutral-900/70 w-full flex-1 p-2 justify-center">
        <Text className="text-white font-bold text-3xl mb-2">
          Launches:
        </Text>

        <Text className="text-white font-thin text-lg">
          Total Launches: 187
        </Text>

        <Text className="text-white font-thin text-lg">
          Successful Launches: 181
        </Text>

        <Text className="text-white font-thin text-base mb-5">
          Revolutionizing space flight with an efficiency of 97% since 2006
        </Text>

        <Pressable
          className="w-52 py-3 px-4 border-2 border-white"
          onPress={() => {
          }}
        >
          <Text className="text-white font-bold text-center">
            Explore All Launches
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default HomePageLaunches;
