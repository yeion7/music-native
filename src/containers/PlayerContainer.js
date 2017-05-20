/* @flow */

import React, { Component } from "react";

import Player from "../components/Player";
import { connect } from "react-redux";
import { View } from "react-native";

import {
  expandPlayer,
  handlePlayPause,
  handleForward,
  handleBack
} from "../actions/player";

import Expo, { Audio } from "expo";

class PlayerContainer extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    });
  }

  render() {
    const { showPlayer } = this.props;
    return (
      <View>
        {showPlayer && <Player {...this.props} />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  showPlayer: state.player.showPlayer,
  isLoading: state.player.isLoading,
  isPlaying: state.player.isPlaying,
  currentSong: state.player.currentSong,
  playbackInstancePosition: state.player.position,
  playbackInstanceDuration: state.player.duration,
  expanded: state.player.expanded,
  playList: state.player.playList,
  index: state.player.index
});

export default connect(mapStateToProps, {
  onPlayPause: handlePlayPause,
  onNext: handleForward,
  onBack: handleBack,
  onExpand: expandPlayer
})(PlayerContainer);
