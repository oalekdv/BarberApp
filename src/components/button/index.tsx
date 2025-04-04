import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Style } from "./styles";

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

type Props = TouchableOpacityProps & {
  buttonBG?: boolean;
  title: string;
  pageNav?: string | undefined;
};

export default function ButtonMain({
  buttonBG,
  title,
  pageNav,
  ...rest
}: Props) {
  const navigation = useNavigation();
  // const [bgState, setBG] = useState(buttonBG);

  return (
    <TouchableOpacity
      style={buttonBG ? [Style.bgButton, Style.bgButtonTitle] : Style.button}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(pageNav)}>
      <Text style={buttonBG ? [Style.bgButtonTitle] : Style.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
