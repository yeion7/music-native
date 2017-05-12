/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Container, Header, Item, Input, Icon, Button,
List, ListItem, Thumbnail, Text, Body, Content, Right } from 'native-base';

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

export default class Main extends Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Container>
          <Header searchBar rounded>
              <Item>
                  <Icon name="ios-search" />
                  <Input
                    autoCorrect={false}
                    placeholder="Search"
                  />
                  <Icon name="ios-musical-notes" />
              </Item>
              <Button transparent>
                  <Text>Search</Text>
              </Button>
          </Header>
          <Content>
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

        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
