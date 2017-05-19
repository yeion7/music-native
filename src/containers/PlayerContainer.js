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

class PlayerContainer extends Component {
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
