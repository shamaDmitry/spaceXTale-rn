import React, { useState } from 'react';

import { ImageBackground, Text, View } from 'react-native';
import heroImg from "../../assets/images/home/hero-bg.jpg";
import CountDown from "../CountDown";

const HomePageHero = (props) => {
  const [isExpired, setIsExpired] = useState(false);

  return (
    <ImageBackground
      className="h-screen items-center justify-center"
      source={heroImg}
      resizeMode="cover"
    >
      <View className="bg-neutral-900/70 w-full flex-1 justify-center p-2">
        <Text className="text-white font-thin text-center text-3xl mb-4">
          Next Launch:

          <Text className="text-blue-500">
            USSF-44
          </Text>
        </Text>

        <CountDown
          expired={isExpired}
          handleExpired={setIsExpired}
          data={{date: '2022-12-09T09:26:00.00Z'}}
        />
      </View>
    </ImageBackground>
  );
};

export default HomePageHero;
