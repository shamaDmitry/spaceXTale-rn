import React, { useState } from 'react';

import { Pressable, ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import RocketCard from "./RocketCard";
import { TableRow } from "./components/TableRow";
import OverviewTable from "./components/OverviewTable";
import EngineTable from "./components/EngineTable";
import FirstStageTable from "./components/FirstStageTable";
import SecondStageTable from "./components/SecondStageTable";
import PayloadsTable from "./components/PayloadsTable";

const Rocket = ({navigation}) => {
  const [tableFilter, setTableFilter] = useState("overview");
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
      <View className="p-2">
        <View className="rounded bg-zinc-700 py-2 px-3">
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
          <OverviewTable show={tableFilter} data={'sadsda'} />
          <EngineTable show={tableFilter} data={'sadsda'} />
          <FirstStageTable show={tableFilter} data={'sadsda'} />
          <SecondStageTable show={tableFilter} data={'sadsda'} />
          <PayloadsTable show={tableFilter} data={'sadsda'} />
        </View>

        <ScrollView
          horizontal
          className="space-x-2 mb-4"
          showsHorizontalScrollIndicator={false}
        >
          <Image
            resizeMethod="resize"
            className="w-96 h-40"
            source={{
              uri: 'https://picsum.photos/800/401'
            }}
          />

          <Image
            resizeMethod="resize"
            className="w-96 h-40"
            source={{
              uri: 'https://picsum.photos/800/402'
            }}
          />

          <Image
            resizeMethod="resize"
            className="w-96 h-40"
            source={{
              uri: 'https://picsum.photos/800/403'
            }}
          />
        </ScrollView>

        <Text className="text-white">sadsda</Text>
        <Text className="text-white">sadsda</Text>
        <Text className="text-white">sadsda</Text>
        <Text className="text-white">sadsda</Text>
        <Text className="text-white">sadsda</Text>
        <Text className="text-white">sadsda</Text>
      </View>
    </ScrollView>
  );
};

export default Rocket;
