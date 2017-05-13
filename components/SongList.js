/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Toast } from "native-base";

import { List } from "native-base";

import Expo, { Audio } from "expo";

import SongItem from "./SongItem";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class SongList extends Component {
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
    const { tracks } = this.props;
    return (
      <View style={styles.container}>
        <List dataArray={tracks} renderRow={info => <SongItem {...info} />} />
      </View>
    );
  }
}
