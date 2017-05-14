/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Toast } from "native-base";
import { List } from "native-base";
import styled from "styled-components/native";
import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";
import { error } from "../lib/error";

const ResultsList = ({ tracks, albums, handlePress, getSongs }) => (
  <View>
    <Separator>Canciones</Separator>
    <List
      dataArray={tracks}
      renderRow={info => <SongItem {...info} handlePress={handlePress} />}
    />
    <Separator>Álbumes</Separator>
    <List
      dataArray={albums}
      renderRow={info => <AlbumItem {...info} handlePress={getSongs} />}
    />
  </View>
);

const Separator = styled.Text`
  background-color: #f0eff5;
  padding: 10;
  font-weight: 600;
`;

export default ResultsList;
