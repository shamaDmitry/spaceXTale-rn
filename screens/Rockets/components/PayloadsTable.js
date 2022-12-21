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

      {data.map((d) => (
        <TableRow
          key={d.id}
          title={d.name}
          content={`${d.kg} kg | ${d.lb} lb`}
        />
      ))}
    </View>
  );
};

export default PayloadsTable;
