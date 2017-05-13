/* @flow weak */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Toast } from "native-base";
import { List } from "native-base";
import styled from "styled-components/native";
import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";
import { error } from "../lib/error";

export default function ResultsList(props) {
  const { tracks, albums, handlePress } = props;
  return (
    <View>
      <Separator>Canciones</Separator>
      <List
        dataArray={tracks}
        renderRow={info => <SongItem {...info} handlePress={handlePress} />}
      />
      <Separator>Álbumes</Separator>
      <List
        dataArray={albums}
        renderRow={info => <AlbumItem {...info} handlePress={handlePress} />}
      />
    </View>
  );
}

const Separator = styled.Text`
  background-color: #f0eff5;
  padding: 10;
  font-weight: 600;
`;
