import React from 'react';

import { Text, View } from 'react-native';
import { TableRow } from "./TableRow";

const PayloadsTable = ({data, show}) => {
  if(show !== "payloads") {
    return null;
  }

  return (
    <View className="px-3">
      <Text className="text-white font-bold text-xl">
        Payloads:
      </Text>

      <TableRow />
      <TableRow />
      <TableRow />
    </View>
  );
};

export default PayloadsTable;
