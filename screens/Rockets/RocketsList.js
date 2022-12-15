import React, { useEffect, useLayoutEffect, useState } from 'react';

import { ScrollView, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import RocketCard from "./RocketCard";
import { getAllRockets } from "../../services/rockets";

const RocketsList = (props) => {
  const [rocketsData, setRocketsData] = useState([]);

  useEffect(() => {
    getAllRockets().then(res => {
      setRocketsData(res);
    })

  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Header navigation={props.navigation} />

      <Text className="text-2xl text-white bg-neutral-900 p-1">
        Rockets:
      </Text>

      <FlatList
        className="bg-neutral-900"
        data={rocketsData}
        renderItem={(item) => <RocketCard {...item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default RocketsList;
