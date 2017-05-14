/* @flow */

import React, { Component } from "react";
import { View } from "react-native";

import { Container, Content } from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import ResultsList from "../components/ResultsList";
import Searcher from "../components/Searcher";
import Player from "../components/Player";

import { getTracks, getAlbum } from "../lib/api";
import Expo, { Audio } from "expo";

export default class Main extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
  }

  static navigationOptions = {
    header: null
  };

  state = {
    fetchReady: false,
    tracks: [],
    albums: [],
    text: "",
    text: "",
    index: 0,
    playbackInstance: null,
    playbackInstancePosition: null,
    playbackInstanceDuration: null,
    isPlaying: true,
    isLoading: false,
    showPlayer: true
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

  async handlePress(song) {
    const { playbackInstance } = this.state;
    if (playbackInstance !== null) {
      playbackInstance.unloadAsync();
      playbackInstance.setCallback(null);
      this.setState({ playbackInstance: null });
    }
    const SOUND_URL = { source: song.preview_url };
    if (SOUND_URL.source !== null) {
      const sound = new Audio.Sound(SOUND_URL);
      this.setState({ playbackInstance: sound });
      try {
        await sound.loadAsync();
        await sound.playAsync();
      } catch (e) {
        error("Error al reproduccir");
      }
    } else {
      error("Canción sin URL");
    }
  }

  handlePlayPause = () => {
    const { isPlaying } = this.state;
    this.setState({ isPlaying: !isPlaying });
    console.log(this.state.isPlaying);
  };

  handleForward = () => {
    console.log("adelante");
  };

  handleBack = () => {
    console.log("Atras");
  };

  render() {
    const {
      tracks,
      text,
      albums,
      showPlayer,
      isLoading,
      isPlaying
    } = this.state;
    return (
      <Container>
        <Searcher handleChange={this.handleChange} state={this.state} />
        <Content>
          {this.state.fetchReady
            ? <ResultsList
                tracks={tracks}
                albums={albums}
                handlePress={this.handlePress}
              />
            : <PlaceHolder />}
        </Content>
        {showPlayer &&
          <Player
            onPlayPause={this.handlePlayPause}
            onNext={this.handleForward}
            onBack={this.handleBack}
            loading={isLoading}
            playing={isPlaying}
          />}

      </Container>
    );
  }
}
