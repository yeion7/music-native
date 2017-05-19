/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import { List } from "native-base";

import styled from "styled-components/native";
import ItemContainer from "../containers/ItemContainer";

const { width, height } = Dimensions.get("window");

const RenderItem = song => <ItemContainer {...song} key={song.id} />;

const PlayList = ({ playList }) => (
  <Wrapper>
    <List dataArray={playList} renderRow={RenderItem} />
  </Wrapper>
);

const Wrapper = styled.View`
  flex:1;
  width: ${width};
  height: ${height};
`;
export default PlayList;
