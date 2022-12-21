import React from 'react';
import * as Linking from 'expo-linking';

import { Text, View } from 'react-native';
import { A } from '@expo/html-elements';

const Footer = () => {
  const spaceLink = () => Linking.openURL('https://tsensei.github.io/spaceXtale/#/homepage');

  return (
    <View className="bg-neutral-900 p-2">
      <Text className="text-white font-thin text-center">
        Mobile version
        {' '}

        <Text className="text-blue-500">
          <A href="https://tsensei.github.io/spaceXtale/#/homepage">
            spaceXtale
          </A>
        </Text>
        {' '}
        by
        {' '}
        <Text className="text-blue-500">
          <A href="https://github.com/shamaDmitry">
            shama
          </A>
        </Text>
        {' '}
        inspired
        {' '}
        <Text className="text-blue-500">
          <A href="https://www.instagram.com/_tsensei_/">
            tsensei
          </A>
        </Text>
        {' '}
        app using
        {' '}
        <Text className="text-blue-500">
          <A href="https://github.com/r-spacex/SpaceX-API">
            SpaceX-api
          </A>
        </Text>
      </Text>
    </View>
  );
};

export default Footer;
