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

      <TableRow title="Engines" content={data.engines} />
      <TableRow title="Burn Time" content={`${data.burn_time_sec} sec`} />
      <TableRow title="Fuel Amount" content={`${data.fuel_amount_tons} ton`} />
      <TableRow title="Reusable" content={data.reusable ? "YES" : "NO"} />
      <TableRow
        title="Sea Level Thrust"
        content={`${data.thrust_sea_level.kN} kN | ${data.thrust_sea_level.lbf} lbf`}
      />
      <TableRow
        title="Vacuum Thrust"
        content={`${data.thrust_vacuum.kN} kN | ${data.thrust_vacuum.lbf} lbf`}
      />
    </View>
  );
};

export default FirstStageTable;
