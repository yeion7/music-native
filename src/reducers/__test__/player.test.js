import React from "react";
import "react-native";

import { setSong, setPlayList, setStatusPlayer } from "../player";
import { playlist, song, status } from "../../../__mocks__/mock_data";

import {
  onSetSong,
  onSetPlayList,
  changePlayerStatus
} from "../../actions/player";

describe("search reducer test ", () => {
  it("handles SET_SONG action", () => {
    expect(setSong(null, onSetSong(song))).toMatchSnapshot();
  });

  it("handles SET_PLAYLIST action", () => {
    expect(setPlayList(null, onSetPlayList(playlist))).toMatchSnapshot();
  });

  it("handles SET_PLAYER_STATUS action", () => {
    expect(setStatusPlayer(null, changePlayerStatus(status))).toMatchSnapshot();
  });
});
