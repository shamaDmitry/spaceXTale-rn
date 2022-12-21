import React, { useEffect, useState } from 'react';

import { Pressable, ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import OverviewTable from "./components/OverviewTable";
import EngineTable from "./components/EngineTable";
import FirstStageTable from "./components/FirstStageTable";
import SecondStageTable from "./components/SecondStageTable";
import PayloadsTable from "./components/PayloadsTable";
import { getOneRocket } from "../../services/rockets";
import unixToLocal from "../../helpers/unixtolocal";

const Rocket = ({route}) => {
  const rocketId = route.params.id;
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [rocketData, setRocketData] = useState([]);
  const [tableFilter, setTableFilter] = useState("overview");

  useEffect(() => {
    getOneRocket(rocketId).then(res => {
      setRocketData(res)
      setIsDataLoading(true);
    })
  }, []);

  const handleFilterChange = (event, screen) => {
    setTableFilter(screen);
  }
  const activeClass = 'bg-blue-600 text-white'
  const tabsItem = [
    {
      title: 'Overview',
      key: 'overview'
    },
    {
      title: 'Engine',
      key: 'engine'
    },
    {
      title: 'First Stage',
      key: 'first-stage'
    },
    {
      title: 'Second Stage',
      key: 'second-stage'
    },
    {
      title: 'Payloads',
      key: 'payloads'
    },
  ];

  return (
    <ScrollView className="bg-neutral-900">
      {
        !isDataLoading ?
          <ActivityIndicator />
          :
          <View className="p-2">
            <View className="rounded bg-zinc-700 py-2 px-3">
              <Text className="mb-2 font-bold text-blue-500 text-2xl">
                {rocketData.name}
              </Text>

              <View className="mb-3">
                <View className="flex-row space-x-2">
                  <Text className="text-white">Status:</Text>
                  <Text className={`font-bold ${rocketData.active ? 'text-green-600' : 'text-red-600'}`}>
                    {rocketData.active ? 'Active' : 'Inactive'}
                  </Text>
                </View>

                <View className="flex-row space-x-2">
                  <Text className="text-white">First Flight:</Text>
                  <Text className="text-white font-bold">
                    {unixToLocal(rocketData.first_flight, 1, 1)}
                  </Text>
                </View>

                <View className="flex-row space-x-2">
                  <Text className="text-white">Cost Per Launch:</Text>
                  <Text className="text-white font-bold">
                    {rocketData.cost_per_launch / 1000000}M USD
                  </Text>
                </View>

                <View className="flex-row space-x-2">
                  <Text className="text-white">Success Rate:</Text>
                  <Text className="text-white font-bold">
                    {rocketData.success_rate_pct}%
                  </Text>
                </View>
              </View>

              <Text className="text-slate-500">
                {rocketData.description}
              </Text>
            </View>

            <ScrollView
              className="py-2"
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-row ">
                {
                  tabsItem.map((item, index) => (
                    <Pressable
                      key={item.key}
                      className={`
                        border-2 px-4 py-2 border-blue-600 
                        ${tableFilter === item.key ? activeClass : null}
                        ${index !== 0 ? 'border-l-0' : null}
                      `}
                      onPress={(event) => handleFilterChange(event, item.key)}
                    >
                      <Text className={`text-blue-600 font-bold ${tableFilter === item.key ? activeClass : null}`}>
                        {item.title}
                      </Text>
                    </Pressable>
                  ))
                }
              </View>
            </ScrollView>

            <View className="mb-4">
              <OverviewTable data={rocketData} show={tableFilter} />
              <EngineTable data={rocketData.engines} show={tableFilter} />
              <FirstStageTable data={rocketData.first_stage} show={tableFilter} />
              <SecondStageTable data={rocketData.second_stage} show={tableFilter} />
              <PayloadsTable data={rocketData.payload_weights} show={tableFilter} />
            </View>

            <ScrollView
              className="space-x-2 mb-4"
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {
                rocketData.flickr_images.map(image => {
                  return (
                    <Image
                      key={image}
                      resizeMethod="resize"
                      className="w-72 h-52"
                      source={{
                        uri: image
                      }}
                    />
                  )
                })
              }
            </ScrollView>
          </View>
      }
    </ScrollView>
  );
};

export default Rocket;
