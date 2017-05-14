/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Button, Icon } from "native-base";

const Controls = ({ onBack, onPlayPause, onNext, isPlaying, index }) => (
  <Container>
    <Button transparent dark onPress={onBack} disabled={index ? false : true}>
      <Icon name="md-skip-backward" />
    </Button>
    {isPlaying
      ? <Button transparent full dark onPress={onPlayPause}>
          <Icon name="md-pause" />
        </Button>
      : <Button transparent full dark onPress={onPlayPause}>
          <Icon name="md-play" />
        </Button>}
    <Button transparent dark onPress={onNext} disabled={index ? false : true}>
      <Icon name="md-skip-forward" />
    </Button>
  </Container>
);

export default Controls;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5;
`;
