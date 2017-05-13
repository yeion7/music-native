/* @flow weak */

import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components/native";

const Logo = () => (
  <View>
    <Wrapper>
      <Platzi>Platzi</Platzi>
      <Music>Music</Music>
    </Wrapper>
    <Message>Tu música sin límites</Message>
  </View>
);

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Platzi = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 28;
  font-family: Quicksand-Bold
`;

const Music = styled.Text`
  color: #8E44AD;
  font-weight: bold;
  font-size: 28;
  font-family: Quicksand-Bold
`;

const Message = styled.Text`
  color: white;
  font-family: Quicksand-Light;
  align-self: center;

`;

export default Logo;
