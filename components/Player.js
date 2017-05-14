/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import {
  Button,
  Icon,
  Text,
  Spinner,
  List,
  ListItem,
  Content
} from "native-base";
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
  playbackInstanceDuration,
  expanded,
  onExpand
}) => (
  <Container style={{ height: expanded ? height : height * 0.25 }}>
    <Button full black onPress={onExpand}>
      {expanded ? <Icon name="arrow-down" /> : <Icon name="arrow-up" />}
    </Button>
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
    {expanded &&
      <Wrapper>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </Wrapper>}
  </Container>
);

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  overflow: visible;
  max-height: ${height}
  height: ${height};
  width: ${width}
  align-items: center;
  justify-content: flex-start;
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

const Wrapper = styled.View`
  width: ${width}
`;

export default Player;
