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

const SongItem = ({
  id,
  name,
  duration_ms,
  artists,
  album,
  preview_url,
  onPressSong
}) => {
  return (
    <ListItem onPress={onPressSong}>
      <Thumbnail square size={80} source={{ uri: album.images[2].url }} />
      <Body>
        <Text>{name}</Text>
        <Text note>{artists[0].name || "---"}</Text>
        <Text note>{formattedTime(duration_ms)}</Text>
      </Body>
      <Right>
        <Icon name="md-play" />
      </Right>
    </ListItem>
  );
};

export default SongItem;
