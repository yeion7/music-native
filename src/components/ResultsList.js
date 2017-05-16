/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "native-base";

import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";

import styled from "styled-components/native";
import { error } from "../utils/error";

const ResultsList = ({ tracks, albums, handlePress, handlePressAlbum }) => (
  <View>
    <Separator>Canciones</Separator>
    <List
      dataArray={tracks}
      renderRow={info => (
        <SongItem key={info.id} {...info} handlePress={handlePress} />
      )}
    />
    <Separator>Álbumes</Separator>
    <List
      dataArray={albums}
      renderRow={info => (
        <AlbumItem key={info.id} {...info} handlePress={handlePressAlbum} />
      )}
    />
  </View>
);

const Separator = styled.Text`
  background-color: #f0eff5;
  padding: 10;
  font-weight: 600;
`;

export default ResultsList;
