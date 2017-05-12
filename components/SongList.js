/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Icon,
  List,
  ListItem,
  Thumbnail,
  Body,
  Content,
  Right,
  Text
} from 'native-base';

import { formattedTime } from '../lib/time'


const SongList = ({ tracks }) => (
  <View style={styles.container}>
    <List dataArray={ tracks }
      renderRow={({id, name, duration_ms, artists, album }) =>
        <ListItem key={ id } onPress={()=> console.warn('play')}>
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
      }>
    </List>
  </View>
);

export default SongList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
