/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Container, Header, Item, Input, Icon, Button,
      List, ListItem, Thumbnail, Body, Content, Right } from 'native-base';

import PlaceHolder from '../components/PlaceHolder'
import SongList from '../components/SongList'

export default class Main extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    songReady: false,
  };

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
            {
              this.state.songReady ? (
                <SongList />
              ) : (
                <PlaceHolder />
              )
            }

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
