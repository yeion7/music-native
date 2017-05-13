/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import {
  Icon,
  List,
  ListItem,
  Thumbnail,
  Body,
  Content,
  Right,
  Text
} from "native-base";

import Expo, { Audio } from "expo";

import { formattedTime } from "../lib/time";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class SongList extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
  }
  async handlePress(song) {
    const SOUND_URL = { source: song.preview_url };
    console.log(SOUND_URL);
    const sound = new Audio.Sound(SOUND_URL);
    try {
      await sound.loadAsync();
      await sound.playAsync();
      const status = await sound.getStatusAsync();
      console.log("estatus", status);
    } catch (e) {
      console.log("occurrio un error");
    }
  }
  render() {
    const { tracks } = this.props;
    return (
      <View style={styles.container}>
        <List
          dataArray={tracks}
          renderRow={({
            id,
            name,
            duration_ms,
            artists,
            album,
            preview_url
          }) => (
            <ListItem
              key={id}
              onPress={() => this.handlePress({ id, name, preview_url })}
            >
              <Thumbnail
                square
                size={80}
                source={{ uri: album.images[2].url }}
              />
              <Body>
                <Text>{name}</Text>
                <Text note>{artists.name}</Text>
                <Text note>{formattedTime(duration_ms)}</Text>
              </Body>
              <Right>
                <Icon name="md-play" />
              </Right>
            </ListItem>
          )}
        />
      </View>
    );
  }
}
