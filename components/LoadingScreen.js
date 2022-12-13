import React from 'react';

import { Text, View } from 'react-native';
import Loading from "./icons/Loading";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen = () => {
  return (
    <View className="bg-black flex-1 justify-center items-center">
      <Loading
        fill="#fff"
        width="300px"
        height="100px"
      />
    </View>
  );
};

export default LoadingScreen;
