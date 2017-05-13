/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import { Button, Icon, Text } from "native-base";
import styled from "styled-components/native";

var { width, height } = Dimensions.get("window");

const Player = () => (
  <Container>
    <Controls>
      <Button transparent full dark>
        <Icon name="md-skip-backward" />
      </Button>
      <Button transparent full dark>
        <Icon name="md-play" />
      </Button>
      <Button transparent disabled={true} full light>
        <Icon name="md-skip-forward" />
      </Button>
    </Controls>
    <Info>
      <Text>
        Subeme la radio
      </Text>
      <Text note>
        1:00 / 3:20
      </Text>
    </Info>
  </Container>
);

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  overflow: visible;
  max-height: 100;
  height: ${height * 0.25};
  width: ${width}
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Info = styled.View`
  align-items: center;
  justify-content: center;
`;

export default Player;
