import React from 'react';

import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import RocketCard from "./RocketCard";

const Rocket = ({navigation}) => {
  return (
    <ScrollView className="bg-neutral-900">
      <View className="p-2">
        <View className="rounded bg-zinc-900 py-2 px-3">
          <Text className="mb-2 font-bold text-blue-500 text-2xl">
            Falcon 1
          </Text>

          <View className="mb-3">
            <View className="flex-row space-x-2">
              <Text className="text-white">Status:</Text>
              <Text className="text-red-600 font-bold">Inactive</Text>
            </View>
            <View className="flex-row space-x-2">
              <Text className="text-white">Status:</Text>
              <Text className="text-white font-bold">Inactive</Text>
            </View>
            <View className="flex-row space-x-2">
              <Text className="text-white">Status:</Text>
              <Text className="text-white font-bold">Inactive</Text>
            </View>
          </View>

          <Text className="text-slate-500">
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during
            2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to
            go into orbit around the Earth.
          </Text>
        </View>
      </View>

      <ScrollView
        horizontal
      >
        <View className="flex-row px-2">
          <Pressable className="border-2 px-4 py-1 border-blue-600">
            <Text className="text-blue-600 font-bold">
              Overview
            </Text>
          </Pressable>

          <Pressable className="border-2 px-4 py-1 border-blue-600">
            <Text className="text-blue-600 font-bold">
              Overview
            </Text>
          </Pressable>

          <Pressable className="border-2 px-4 py-1 border-blue-600">
            <Text className="text-blue-600 font-bold">
              Overview
            </Text>
          </Pressable>

          <Pressable className="border-2 px-4 py-1 border-blue-600">
            <Text className="text-blue-600 font-bold">
              Overview
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Rocket;
