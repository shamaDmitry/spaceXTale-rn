import { Text, View } from "react-native";
import React from "react";

export const TableRow = ({title, content}) => {
  if(!content) return null;
  if(typeof content === "string" && content.includes("null")) return null;

  let textClass = 'text-white text-base w-6/12'
  let containerClass = 'flex-row items-center justify-between py-2 border-b-2 border-b-white mb-2 '

  return (
    <View className={containerClass}>
      <Text className={textClass}>
        {title}
      </Text>
      <Text className={`${textClass} text-right`}>
        {content}
      </Text>
    </View>
  );
};
