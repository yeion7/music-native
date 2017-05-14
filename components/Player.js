/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import { Button, Icon, Text, Spinner } from "native-base";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

import { formattedTime } from "../lib/time";

const Player = ({
  onPlayPause,
  onNext,
  onBack,
  isLoading,
  isPlaying,
  currentSong,
  playbackInstancePosition,
  playbackInstanceDuration
}) => (
  <Container>
    {isLoading
      ? <Spinner color="black" />
      : <Controls>
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
        </Controls>}
    <Info>
      <Text>
        {currentSong.name}
      </Text>
      <Text note>
        {formattedTime(playbackInstancePosition)}
        {" "}
        /
        {" "}
        {formattedTime(playbackInstanceDuration)}
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
