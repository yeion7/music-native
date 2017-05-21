/* @flow */

import React, { Component } from "react";

import Player from "../components/Player";
import { connect } from "react-redux";
import { error } from "../utils/error";

import { changePlayerStatus, onSetSong } from "../actions/player";

import Expo, { Audio } from "expo";

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
  }

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

  componentDidUpdate() {
    const { preview_url } = this.props;

    if (this.playbackInstance) {
      this._unLoadInstance(preview_url);
    } else if (preview_url) {
      this._LoadInstance(preview_url);
    }
  }

  _LoadInstance = async preview_url => {
    if (preview_url) {
      this.playbackInstance = new Audio.Sound({
        source: preview_url
      });

      this.props.changePlayerStatus({
        showPlayer: true,
        isLoading: true,
        position: null,
        duration: null
      });

      this.playbackInstance.setCallback(this._callbackSong);
      this.playbackInstance.setCallbackPollingMillis(1000);

      try {
        await this.playbackInstance.loadAsync();
        const { durationMillis } = await this.playbackInstance.playAsync();
        this.props.changePlayerStatus({
          isLoading: false,
          isPlaying: true,
          duration: durationMillis
        });
      } catch (error) {
        error("Error al reproducir la canción");
      }
    } else {
      error("canción sin URL");
    }
  };

  _unLoadInstance = preview_url => {
    this.playbackInstance.unloadAsync();
    this.playbackInstance.setCallback(null);
    this._LoadInstance(preview_url);
  };

  _callbackSong = status => {
    if (status.isPlaying) {
      this.props.changePlayerStatus({
        position: status.positionMillis
      });
    }

    if (status.didJustFinish && !this.props.playlist) {
      console.log("termino sin index");
      this.props.changePlayerStatus({
        showPlayer: false
      });
      this._unLoadInstance();
    }

    if (status.didJustFinish && this.props.index) {
      console.log("termino con index");

      this._onBackward();
    }
  };

  _onPlayPause = async () => {
    if (this.playbackInstance != null) {
      const { isPlaying } = await this.playbackInstance.getStatusAsync();
      if (isPlaying) {
        this.playbackInstance.pauseAsync();
        this.props.changePlayerStatus({
          isPlaying: false
        });
      } else {
        this.playbackInstance.playAsync();
        this.props.changePlayerStatus({
          isPlaying: true
        });
      }
    }
  };

  _onForward = () => {
    const { index, playlist } = this.props;
    newIndex = index >= playlist.length ? 0 : index;
    this.props.onSetSong(playlist[newIndex]);
  };

  _onBackward = () => {
    const { index, playlist } = this.props;
    newIndex = index == 1 ? playlist.length - 1 : index - 2;
    this.props.onSetSong(playlist[newIndex]);
  };

  _onExpand = () => {
    this.props.changePlayerStatus({
      expand: !this.props.expand
    });
  };

  render() {
    return (
      <Player
        onPlayPause={this._onPlayPause}
        onNext={this._onForward}
        onBack={this._onBackward}
        onExpand={this._onExpand}
      />
    );
  }
}

const mapStateToProps = state => ({
  preview_url: state.player.song.preview_url,
  index: state.player.song.track_number || null,
  playlist: state.player.playlist,
  expand: state.player.status.expand
});

export default connect(mapStateToProps, {
  changePlayerStatus,
  onSetSong
})(PlayerContainer);
