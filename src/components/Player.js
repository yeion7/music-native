/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import { Button, Icon, Spinner } from "native-base";

import PlayList from "./PlayList";
import Controls from "./Controls";
import Info from "./Info";

const { width, height } = Dimensions.get("window");
import styled from "styled-components/native";

const Player = ({
  onPlayPause,
  onNext,
  onBack,
  onExpand,
  onPressSong,
  isLoading,
  isPlaying,
  currentSong,
  playbackInstancePosition,
  playbackInstanceDuration,
  expanded,
  playList,
  index
}) => (
  <Container
    style={{
      height: expanded ? height : height * 0.27,
      justifyContent: expanded ? "flex-start" : "center"
    }}
  >
    {playList.length > 0
      ? <Button full black onPress={onExpand}>
          {expanded ? <Icon name="arrow-down" /> : <Icon name="arrow-up" />}
        </Button>
      : null}

    {isLoading
      ? <Spinner color="black" />
      : <Controls
          onPlayPause={onPlayPause}
          onNext={onNext}
          onBack={onBack}
          isPlaying={isPlaying}
          index={index}
        />}

    <Info
      position={playbackInstancePosition}
      duration={playbackInstanceDuration}
      song={currentSong}
    />

    {expanded && <PlayList playList={playList} onPressSong={onPressSong} />}
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
  width: ${width}
  align-items: center;
  flex: 1;
`;

export default Player;