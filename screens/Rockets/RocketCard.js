import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RocketCard = () => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigator.navigate('Rocket')}
    >
      <View className="bg-zinc-900 rounded-md shadow overflow-hidden mb-3 p-1">
        <Image
          resizeMethod="resize"
          className="w-full h-40 rounded-t-md"
          source={{
            uri: 'https://picsum.photos/800/400'
          }}
        />

        <View className="p-1">
          <Text className="text-white font-bold text-2xl text-blue-500">
            Falcon 1
          </Text>

          <Text className="text-slate-500">
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during
            2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch
            vehicle
            to go into orbit around the Earth.
          </Text>
        </View>

        <View className="p-2 pt-0 flex-row justify-between">
          <Text className="text-white">First Flight:</Text>
          <Text className="text-white">Mar 24, 2006</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RocketCard;
