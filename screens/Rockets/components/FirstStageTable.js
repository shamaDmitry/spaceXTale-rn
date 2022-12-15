import { View, Text } from "react-native";
import { TableRow } from "./TableRow";
import React from "react";

const FirstStageTable = ({data, show}) => {
  if(show !== "first-stage") {
    return null;
  }
  return (
    <View className="px-3">
      <Text className="text-white font-bold text-xl">
        First stage:
      </Text>

      <TableRow />
      <TableRow />
      <TableRow />
    </View>
  );
};

export default FirstStageTable;
