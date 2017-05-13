/* @flow */

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  List,
  ListItem,
  Thumbnail,
  Body,
  Content,
  Right
} from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import SongList from "../components/SongList";

import getTracks from "../lib/api";

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
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              autoCorrect={false}
              placeholder="Search"
              value={this.state.text}
              onChangeText={this.handleChange}
            />
          </Item>
        </Header>
        <Content>
          {this.state.songsReady
            ? <SongList tracks={tracks} />
            : <PlaceHolder />}

        </Content>
      </Container>
    );
  }
}
