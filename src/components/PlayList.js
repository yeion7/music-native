/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import { Text, List, ListItem, Left, Right } from "native-base";

import styled from "styled-components/native";
import { formattedTime } from "../utils/time";

const { width, height } = Dimensions.get("window");

const PlayList = ({ playList, onPressSong }) => (
  <Wrapper>
    <List
      dataArray={playList}
      renderRow={song => (
        <ListItem key={song.id} onPress={() => onPressSong(song)}>
          <Left>
            <Text>{song.name}</Text>
          </Left>
          <Right>
            <Text>{formattedTime(song.duration_ms)}</Text>
          </Right>
        </ListItem>
      )}
    />
  </Wrapper>
);

const Wrapper = styled.View`
  flex:1;
  width: ${width};
  height: ${height};
`;
export default PlayList;