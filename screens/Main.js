/* @flow */

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, Content } from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import ResultsList from "../components/ResultsList";
import Searcher from "../components/Searcher";

import { getTracks } from "../lib/api";

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    songsReady: false,
    tracks: [],
    text: ""
  };

  fetchTracks(q) {
    getTracks(q)
      .then(data => this.setState({ tracks: data, songsReady: true }))
      .catch(error => console.log(error));
  }

  handleChange = text => {
    this.setState({ text });
    this.fetchTracks(text);
  };

  render() {
    const { tracks, text } = this.state;
    return (
      <Container>
        <Searcher handleChange={this.handleChange} state={this.state} />
        <Content>
          {this.state.songsReady
            ? <ResultsList tracks={tracks} />
            : <PlaceHolder />}

        </Content>
      </Container>
    );
  }
}
