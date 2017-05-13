/* @flow */

import React, { Component } from "react";
import { View } from "react-native";

import { Container, Content } from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import ResultsList from "../components/ResultsList";
import Searcher from "../components/Searcher";
import Player from "../components/Player";

import { getTracks, getAlbum } from "../lib/api";

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fetchReady: false,
    tracks: [],
    albums: [],
    text: "",
    index: 0,
    playbackInstanceName: "",
    playbackInstancePosition: null,
    playbackInstanceDuration: null,
    shouldPlay: false,
    isPlaying: false,
    isBuffering: false,
    isLoading: true
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

  render() {
    const { tracks, text, albums } = this.state;
    return (
      <Container>
        <Searcher handleChange={this.handleChange} state={this.state} />
        <Content>
          {this.state.fetchReady
            ? <ResultsList tracks={tracks} albums={albums} />
            : <PlaceHolder />}
        </Content>
        <Player />

      </Container>
    );
  }
}
