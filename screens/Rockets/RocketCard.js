import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RocketCard = ({item}) => {
  const navigation = useNavigation();

  const descriptionData = {
    'First Flight': item.first_flight,
    'Stages': item.stages,
    'Boosters': item.boosters,
    'Cost Per Launch $': item.cost_per_launch,
    'Success Rate %': item.success_rate_pct,
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Rocket', {id: item.id})}
    >
      <View className="bg-stone-700 mx-2 mb-4 p-2">
        <Image
          resizeMethod="resize"
          className="w-full h-40"
          source={{
            uri: item.flickr_images[0]
          }}
        />


        <View className="py-1 mb-3">
          <Text className="text-white font-bold text-2xl text-blue-500">
            {item.name}
          </Text>

          <Text className="text-white">
            {item.description}
          </Text>
        </View>

        <View className="py-2 pt-0 flex-row justify-between">
          <Text className="text-white">
            First Flight
          </Text>
          <Text className="text-white">
            {item.first_flight}
          </Text>
        </View>

        <View className="py-2 pt-0 flex-row justify-between">
          <Text className="text-white">
            Stages
          </Text>
          <Text className="text-white">
            {item.stages}
          </Text>
        </View>

        <View className="py-2 pt-0 flex-row justify-between">
          <Text className="text-white">
            Boosters
          </Text>
          <Text className="text-white">
            {item.boosters}
          </Text>
        </View>

        <View className="py-2 pt-0 flex-row justify-between">
          <Text className="text-white">
            Cost Per Launch $
          </Text>
          <Text className="text-white">
            {item.cost_per_launch / 1000000}M USD
          </Text>
        </View>

        <View className="py-2 pt-0 flex-row justify-between">
          <Text className="text-white">
            Success Rate
          </Text>
          <Text className="text-white">
            {item.success_rate_pct}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RocketCard;
