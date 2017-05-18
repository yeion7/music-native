/* @flow */

import React, { Component } from "react";

import Player from "../components/Player";
import { connect } from "react-redux";
import { View } from "react-native";

import {
  expandPlayer,
  playSong,
  handlePlayPause,
  handleForward,
  handleBack
} from "../actions/player";

class PlayerContainer extends Component {
  render() {
    const { showPlayer } = this.props;
    return (
      <View>
        {showPlayer &&
          <Player
            onPlayPause={this.handlePlayPause}
            onNext={this.handleForward}
            onBack={this.handleBack}
            onExpand={this.handleExpand}
            onPressSong={this.handlePressSong}
            {...this.props}
          />}
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
  onExpand: expandPlayer,
  onPressSong: playSong
})(PlayerContainer);
