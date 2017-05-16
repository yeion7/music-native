/* @flow */

import React, { Component } from "react";
import { View } from "react-native";

import { Container, Content } from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import ResultsList from "../components/ResultsList";
import SearcherContainer from "../containers/SearcherContainer";
import Player from "../components/Player";

import { error } from "../utils/error";
import { fetchItems, fetchSongs } from "../utils/api";
import Expo, { Audio, Font } from "expo";

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

  state = {
    fetchReady: false,
    tracks: [],
    albums: [],
    currentSong: {},
    playList: [],
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

  fetchItems = async () => {
    const { text } = this.state;
    const data = await fetchItems(text);

    this.setState({
      tracks: data.tracks,
      albums: data.albums,
      fetchReady: true
    });
  };

  fetchPlayList = async url => {
    const songs = await fetchSongs(url);

    this.setState({ playList: songs, showPlayer: true, expanded: true });
  };

  handleChange = text => {
    this.setState({ text });

    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(this.fetchItems, 300);
  };

  handlePressAlbum = url => {
    this.fetchPlayList(url);
  };

  handlePressSong = song => {
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
        isPlaying: status.isPlaying
      });
    }

    if (status.didJustFinish && this.state.index) {
      this.handleForward();
    }

    if (status.didJustFinish && !this.state.index) {
      this.setState({ showPlayer: false });
    }

    if (status.isLoaded && !status.positionMillis) {
      this.state.playbackInstance.playAsync();
    }

    if (status.isPlaying) {
      this.setState({ isLoading: false });
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
        <SearcherContainer />

        <Content>
          {this.state.fetchReady && text
            ? <ResultsList
                tracks={tracks}
                albums={albums}
                handlePress={this.handlePressSong}
                handlePressAlbum={this.handlePressAlbum}
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
