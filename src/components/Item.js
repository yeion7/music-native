/* @flow weak */

import React from "react";
import { Text, List, ListItem, Left, Right } from "native-base";
import { formattedTime } from "../utils/time";

import { View } from "react-native";

const Item = ({ name, duration_ms, onPressSong }) => {
  return (
    <ListItem onPress={onPressSong}>
      <Left>
        <Text>{name}</Text>
      </Left>
      <Right>
        <Text>{formattedTime(duration_ms)}</Text>
      </Right>
    </ListItem>
  );
};

export default Item;
