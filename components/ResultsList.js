/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Toast } from "native-base";
import { List } from "native-base";
import Expo, { Audio } from "expo";
import styled from "styled-components/native";
import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";

export default class ResultsList extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
  }

  showMessage = msg => {
    Toast.show({
      text: msg,
      position: "center",
      duration: 1000
    });
  };

  async handlePress(song) {
    const SOUND_URL = { source: song.preview_url };
    if (SOUND_URL.source !== null) {
      const sound = new Audio.Sound(SOUND_URL);
      try {
        await sound.loadAsync();
        await sound.playAsync();
      } catch (e) {
        this.showMessage("Error al reproduccir");
      }
    } else {
      this.showMessage("Canción sin URL");
    }
  }

  render() {
    const { tracks, albums } = this.props;
    return (
      <View>
        <Separator>Canciones</Separator>
        <List dataArray={tracks} renderRow={info => <SongItem {...info} />} />
        <Separator>Álbumes</Separator>
        <List
          dataArray={albums}
          renderRow={info => (
            <AlbumItem {...info} handlePress={this.handlePress} />
          )}
        />
      </View>
    );
  }
}

const Separator = styled.Text`
  background-color: #f0eff5;
  padding: 10;
  font-weight: 600;
`;
