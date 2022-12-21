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

      <TableRow title="Engines" content={data.engines} />
      <TableRow title="Burn Time" content={`${data.burn_time_sec} sec`} />
      <TableRow title="Fuel Amount" content={`${data.fuel_amount_tons} ton`} />
      <TableRow title="Reusable" content={data.reusable ? "YES" : "NO"} />
      <TableRow
        title="Thrust"
        content={`${data.thrust.kN} kN | ${data.thrust.lbf} lbf`}
      />
      <TableRow
        title="Fairing Type"
        content={data.payloads.option_1.toUpperCase()}
      />
      <TableRow
        title="Fairing Height"
        content={`${data.payloads.composite_fairing.height.meters} meters | ${data.payloads.composite_fairing.height.feet} feet`}
      />
      <TableRow
        title="Fairing Diameter"
        content={`${data.payloads.composite_fairing.diameter.meters} meters | ${data.payloads.composite_fairing.diameter.feet} feet`}
      />
    </View>
  );
};

export default SecondStageTable;
