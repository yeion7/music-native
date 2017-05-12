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


const artists = [
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
  {name: 'Li Lan La', album: 'Li Lan La', duration: '3:42', image: '../assets/images/download.jpeg'},
]

const SongList = () => (
  <View style={styles.container}>
    <List dataArray={artists}
      renderRow={({name, album, duration, image}) =>
        <ListItem onPress={()=> console.warn('play')}>
            <Thumbnail
                square
                size={80} source={require('../assets/images/download.jpeg')}
            />
            <Body>
                <Text>{name}</Text>
                <Text note>{album}</Text>
                <Text note>{duration}</Text>

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
