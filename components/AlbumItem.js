/* @flow weak */

import React from "react";

import {
  Icon,
  List,
  ListItem,
  Thumbnail,
  Body,
  Right,
  Text
} from "native-base";

import { formattedTime } from "../lib/time";

const AlbumItem = ({
  id,
  name,
  image,
  artists,
  url_songs,
  type,
  handlePress
}) => (
  <ListItem key={id} onPress={() => handlePress(url_songs)}>
    <Thumbnail square size={80} source={{ uri: image }} />
    <Body>
      <Text>{name}</Text>
      <Text note>{artists.name}</Text>
      <Text note>{type}</Text>
    </Body>
    <Right>
      <Icon name="md-play" />
    </Right>
  </ListItem>
);

export default AlbumItem;
