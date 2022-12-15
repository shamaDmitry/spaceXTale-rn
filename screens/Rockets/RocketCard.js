import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RocketCard = ({item}) => {
    const navigator = useNavigation();

  {/*First Flight	: Mar 24, 2006*/}
  {/*Stages	: 2*/}
  {/*Boosters	: 0*/}
  {/*Cost Per Launch	: $6.7M*/}
  {/*Success Rate	: 40 %*/}

    const descriptionData = {
      'First Flight': item.first_flight,
      'Stages': item.stages,
      'Boosters': item.boosters,
      'Cost Per Launch $': item.cost_per_launch,
      'Success Rate %': item.success_rate_pct,
    }

    return (
      <View
        onPress={() => navigator.navigate('Rocket', {id: item.id})}
      >
        <Text className="text-red-600">
          {JSON.stringify(descriptionData, null, 2)}
        </Text>

        <View className="bg-zinc-900 mb-3 p-1">
          <ScrollView
            className="space-x-2"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {
              item.flickr_images.map(image => {
                return (
                  <Image
                    key={image}
                    resizeMethod="resize"
                    className="w-72 h-40"
                    source={{
                      uri: image
                    }}
                  />
                )
              })
            }
          </ScrollView>

          <TouchableOpacity
            onPress={() => navigator.navigate('Rocket', {id: item.id})}
          >
            <View className="p-1">
              <Text className="text-white font-bold text-2xl text-blue-500">
                {item.name}
              </Text>

              <Text className="text-slate-500">
                {item.description}
              </Text>
            </View>

            <Text>
              {Object.keys(descriptionData)}
            </Text>

            {

              Object.entries(descriptionData).map(item => {
                console.log(item)

                return (
                  <View className="p-2 pt-0 flex-row justify-between">
                    <Text className="text-white"></Text>
                    <Text className="text-white">{item.first_flight}</Text>
                  </View>
                )
              })
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
;

export default RocketCard;
