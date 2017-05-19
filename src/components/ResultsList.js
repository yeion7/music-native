/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "native-base";

import SongItemContainer from "../containers/SongItemContainer";
import AlbumItemContainer from "../containers/AlbumItemContainer";

import styled from "styled-components/native";
import { error } from "../utils/error";

renderSongItem = info => <SongItemContainer key={info.id} {...info} />;

renderAlbumItem = info => <AlbumItemContainer key={info.id} {...info} />;

const ResultsList = ({ tracks, albums }) => (
  <View>
    <Separator>Canciones</Separator>
    <List dataArray={tracks} renderRow={renderSongItem} />
    <Separator>Álbumes</Separator>
    <List dataArray={albums} renderRow={renderAlbumItem} />
  </View>
);

const Separator = styled.Text`
  background-color: #f0eff5;
  padding: 10;
  font-weight: 600;
`;

export default ResultsList;
