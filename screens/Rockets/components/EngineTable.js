import { View, Text } from "react-native";
import { TableRow } from "./TableRow";
import React from "react";

const EngineTable = ({data, show}) => {
  if(show !== "engine") {
    return null;
  }

  return (
    <View className="px-3">
      <Text className="text-white font-bold text-xl">
        Engine:
      </Text>

      <TableRow />
    </View>
  );
};

export default EngineTable;
