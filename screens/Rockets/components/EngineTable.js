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

      <TableRow
        title="Type"
        content={data.type?.toUpperCase()}
      />
      <TableRow title="Amount" content={data.number} />
      <TableRow title="Version" content={data.version} />
      <TableRow title="Layout" content={data.layout?.toUpperCase()} />
      <TableRow title="Max Engine Loss" content={data.engine_loss_max || ""} />
      <TableRow title="Propellant 1" content={data.propellant_1} />
      <TableRow title="Propellant 2" content={data.propellant_2} />
      <TableRow
        title="Specific Impulse"
        content={`${data.isp.sea_level} (sea) | ${data.isp.vacuum} (vacuum)`}
      />
      <TableRow
        title="Thrust to Weight Ratio"
        content={data.thrust_to_weight}
      />
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

export default EngineTable;
