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

      <TableRow
        title="Height"
        content={`${data.height.meters} meters | ${data.height.feet} feet`}
      />

      <TableRow
        title="Diameter"
        content={`${data.diameter.meters} meters | ${data.diameter.feet} feet`}
      />

      <TableRow
        title="Stages"
        content={`${data.stages}`}
      />
    </View>
  );
};

export default OverviewTable;
