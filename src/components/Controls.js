/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";

import styled from "styled-components/native";

const Controls = ({ onBack, onPlayPause, onNext, isPlaying, index }) => (
  <Container>
    {index &&
      <Button transparent dark onPress={onBack}>
        <Icon name="md-skip-backward" />
      </Button>}
    {isPlaying
      ? <Button transparent full dark onPress={onPlayPause}>
          <Icon name="md-pause" />
        </Button>
      : <Button transparent full dark onPress={onPlayPause}>
          <Icon name="md-play" />
        </Button>}
    {index &&
      <Button transparent dark onPress={onNext}>
        <Icon name="md-skip-forward" />
      </Button>}
  </Container>
);

export default Controls;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 10;
`;
