/* @flow */

import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

import styled from "styled-components/native";

var { height } = Dimensions.get("window");

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${height - height * 0.2}

`;

const Emoji = styled.Text`
  font-size: 50;
`;

const PlaceHolder = () => (
  <Wrapper>
    <Emoji>🎧</Emoji>
    <Text>Busca tu canción favorita</Text>
  </Wrapper>
);

export default PlaceHolder;
