/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Button, Icon } from "native-base";

const Controls = ({ onBack, onPlayPause, onNext, isPlaying }) => (
  <Container>
    <Button transparent full dark onPress={onBack}>
      <Icon name="md-skip-backward" />
    </Button>
    {isPlaying
      ? <Button transparent full dark onPress={onPlayPause}>
          <Icon name="md-pause" />
        </Button>
      : <Button transparent full dark onPress={onPlayPause}>
          <Icon name="md-play" />
        </Button>}
    <Button transparent full dark onPress={onNext}>
      <Icon name="md-skip-forward" />
    </Button>
  </Container>
);

export default Controls;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
