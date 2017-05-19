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

import { formattedTime } from "../utils/time";

const AlbumItem = ({
  id,
  name,
  image,
  artists,
  url_songs,
  type,
  handlePressAlbum
}) => (
  <ListItem onPress={handlePressAlbum}>
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
