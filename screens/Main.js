/* @flow */

import React, { Component } from "react";
import { View } from "react-native";

import { Container, Content } from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import ResultsList from "../components/ResultsList";
import Searcher from "../components/Searcher";
import Player from "../components/Player";

import { error } from "../lib/error";
import { getTracks, getAlbum, formateTracks } from "../lib/api";
import Expo, { Audio } from "expo";

export default class Main extends Component {
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

  static navigationOptions = {
    header: null
  };

  state = {
    fetchReady: false,
    tracks: [],
    albums: [],
    currentSong: {},
    playList: [],
    text: "",
    text: "",
    index: null,
    playbackInstance: null,
    playbackInstancePosition: null,
    playbackInstanceDuration: null,
    isPlaying: true,
    isLoading: false,
    showPlayer: false,
    expanded: false
  };

  fetchTracks(q) {
    getTracks(q)
      .then(data => this.setState({ tracks: data }))
      .catch(error => console.log(error));
  }

  fetchAlbum(q) {
    getAlbum(q)
      .then(data => this.setState({ albums: data }))
      .catch(error => console.log(error));
  }

  handleChange = text => {
    this.setState({ text });
    Promise.all([this.fetchTracks(text), this.fetchAlbum(text)]).then(() =>
      this.setState({ fetchReady: true })
    );
  };

  handlePressAlbum = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => data.tracks.items)
      .then(tracks => tracks.map(formateTracks))
      .then(songs =>
        this.setState({ playList: songs, showPlayer: true, expanded: true })
      );
  };

  handlePressSong = song => {
    if (song.track_number) {
      this.setState({ index: song.track_number });
    }

    this.loadNewInstance(song);
  };

  loadNewInstance = song => {
    const { playbackInstance } = this.state;
    if (playbackInstance !== null) {
      playbackInstance.unloadAsync();
      playbackInstance.setCallback(null);
      this.setState({ playbackInstance: null });
    }
    const SOUND_URL = { source: song.preview_url };
    if (SOUND_URL.source !== null) {
      const sound = new Audio.Sound(SOUND_URL);
      sound.setCallback(this.statusSong);
      this.setState({
        playbackInstance: sound,
        currentSong: song,
        showPlayer: true,
        isLoading: true,
        index: song.track_number
      });

      sound.loadAsync();
    } else {
      error("Canción sin URL");
    }
  };
  statusSong = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        isPlaying: status.isPlaying,
        isLoading: false
      });
    }

    if (status.didJustFinish && this.state.index) {
      this.handleForward();
    }
  };

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handlePlayPause = () => {
    const { isPlaying, playbackInstance } = this.state;
    if (playbackInstance != null) {
      if (isPlaying) {
        playbackInstance.pauseAsync();
        this.setState({ isPlaying: !isPlaying });
      } else {
        playbackInstance.playAsync();
        this.setState({ isPlaying: !isPlaying });
      }
    }
  };

  handleForward = () => {
    const { index, playList } = this.state;
    newIndex = index >= playList.length ? 0 : index;
    this.loadNewInstance(playList[newIndex]);
  };

  handleBack = () => {
    const { index, playList } = this.state;
    newIndex = index == 1 ? playList.length - 1 : index - 2;
    this.loadNewInstance(playList[newIndex]);
  };

  render() {
    const { tracks, text, albums, showPlayer } = this.state;
    return (
      <Container>
        <Searcher handleChange={this.handleChange} state={this.state} />
        <Content>
          {this.state.fetchReady && text
            ? <ResultsList
                tracks={tracks}
                albums={albums}
                handlePress={this.handlePressSong}
                getSongs={this.handlePressAlbum}
              />
            : <PlaceHolder />}
        </Content>
        {showPlayer &&
          <Player
            onPlayPause={this.handlePlayPause}
            onNext={this.handleForward}
            onBack={this.handleBack}
            onExpand={this.handleExpand}
            onPressSong={this.handlePressSong}
            {...this.state}
          />}

      </Container>
    );
  }
}
