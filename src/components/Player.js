/* @flow weak */

import React from "react";
import { View, Dimensions } from "react-native";
import { Button, Icon, Spinner } from "native-base";
import { connect } from "react-redux";

import PlayList from "./PlayList";
import Controls from "./Controls";
import Info from "./Info";

import {
  expandPlayer,
  handlePlayPause,
  handleForward,
  handleBack,
  changePlayerStatus
} from "../actions/player";

const { width, height } = Dimensions.get("window");
import styled from "styled-components/native";

const Player = ({
  onPlayPause,
  onNext,
  onBack,
  onExpand,
  isLoading,
  isPlaying,
  song,
  position,
  duration,
  expand,
  playlist,
  index,
  showPlayer
}) => (
  <View>
    {showPlayer &&
      <Container
        style={{
          height: expand ? height : height * 0.27,
          justifyContent: expand ? "flex-start" : "center"
        }}
      >
        {playlist.length > 0
          ? <Button full black onPress={onExpand}>
              {expand ? <Icon name="arrow-down" /> : <Icon name="arrow-up" />}
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

        <Info position={position} duration={duration} song={song} />

        {expand && <PlayList playList={playlist} />}
      </Container>}
  </View>
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

const mapStateToProps = ({
  player: {
    status: { showPlayer, isLoading, isPlaying, position, duration, expand },
    song,
    playlist
  }
}) => ({
  showPlayer,
  isLoading,
  isPlaying,
  song,
  position,
  duration,
  expand,
  playlist,
  index: song.track_number
});

export default connect(mapStateToProps)(Player);
