import { View, Text } from "react-native";
import { TableRow } from "./TableRow";
import React from "react";

const OverviewTable = ({data, show}) => {
  if(show !== "overview") {
    return null;
  }
  return (
    <View className="px-3">
      <Text className="text-white font-bold text-xl">
        Overview:
      </Text>

      <TableRow />
      <TableRow />
    </View>
  );
};

export default OverviewTable;
