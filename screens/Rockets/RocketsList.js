import React from 'react';

import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import RocketCard from "./RocketCard";

const RocketsList = (props) => {
  return (
    <SafeAreaView className="flex-1">
      <Header navigation={props.navigation} />

      <ScrollView className="p-2 bg-neutral-900">
        <Text className="text-2xl mb-4 text-white">
          Rockets:
        </Text>

        <RocketCard {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RocketsList;
