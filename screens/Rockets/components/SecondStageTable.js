import { View, Text } from "react-native";
import { TableRow } from "./TableRow";
import React from "react";

const SecondStageTable = ({data, show}) => {
  if(show !== "second-stage") {
    return null;
  }
  return (
    <View className="px-3">
      <Text className="text-white font-bold text-xl">
        Second stage:
      </Text>

      <TableRow />
      <TableRow />
      <TableRow />
    </View>
  );
};

export default SecondStageTable;
