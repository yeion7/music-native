/* @flow weak */

import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import styled from "styled-components/native";

import { formattedTime } from "../utils/time";

const Info = ({ song: { name }, position, duration }) => (
  <Container>
    <Text
      style={{ textAlign: "center", paddingHorizontal: 10 }}
      ellipsizeMode={"tail"}
      numberOfLines={1}
    >
      {name}
    </Text>
    <Text note>
      {formattedTime(position)}
      {" "}
      /
      {" "}
      {formattedTime(duration)}
    </Text>
  </Container>
);

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 2;
`;

export default Info;
