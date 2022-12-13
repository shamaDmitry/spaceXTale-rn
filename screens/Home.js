import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import LoadingScreen from "../components/LoadingScreen";
import HomePageHero from "../components/Homepage/HomePageHero";
import HomePageLaunches from "../components/Homepage/HomePageLaunches";
import Footer from "../components/Footer";
import HomePageRoadster from "../components/Homepage/HomePageRoadster";
import HomePageRockets from "../components/Homepage/HomePageRockets";
import HomePageStarlink from "../components/Homepage/HomePageStarlink";
import Header from "../components/Header";

const Home = ({navigation}) => {
  return (
    // <LoadingScreen />
    <SafeAreaView className="flex-1">
      <Header navigation={navigation} />

      <ScrollView>
        <HomePageHero />

        <HomePageLaunches />

        <HomePageRockets />

        <HomePageStarlink />

        <HomePageRoadster />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
