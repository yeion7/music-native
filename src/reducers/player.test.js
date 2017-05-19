import React from "react";
import "react-native";

import {
  setSong,
  setAlbum,
  changeExpand,
  showPlayer,
  setIndex,
  loadSong,
  setDuration,
  setPosition,
  setPlaying,
  setPlayback
} from "./player";
import {
  onPressSong,
  showPlayer as onShowPlayer,
  onPressAlbum,
  expandPlayer,
  setIndex as onSetIndex,
  setPlayback as onSetPlayback,
  isLoadingSong,
  setPosition as onSetPosition,
  setDuration as onSetDuration,
  setPlaying as onSetPlaying
} from "../actions/player";

describe("search reducer test ", () => {
  it("handles CHANGE_PLAYING_SONG action", () => {
    expect(setSong(null, onPressSong({}))).toMatchSnapshot();
  });
  it("handles CHANGE_SELECTED_PLAYLISTS action", () => {
    expect(setAlbum(null, onPressAlbum({}))).toMatchSnapshot();
  });
  it("handles CHANGE_EXPAND_PLAYER action", () => {
    expect(changeExpand(null, expandPlayer(false))).toMatchSnapshot();
  });
  it("handles CHANGE_PLAYER_STATUS action", () => {
    expect(showPlayer(null, onShowPlayer(false))).toMatchSnapshot();
  });
  it("handles SET_INDEX_SONG action", () => {
    expect(setIndex(null, onSetIndex(1))).toMatchSnapshot();
  });
  it("handles LOADING_PLAYBACK_SONG action", () => {
    expect(loadSong(null, isLoadingSong(true))).toMatchSnapshot();
  });
  it("handles SET_PLAYBACK_DURATION action", () => {
    expect(setDuration(null, onSetDuration(1000))).toMatchSnapshot();
  });
  it("handles UPDATE_PLAYBACK_POSITION action", () => {
    expect(setPosition(null, onSetPosition(1000))).toMatchSnapshot();
  });
  it("handles CHANGE_STATE_SONG action", () => {
    expect(setPlaying(null, onSetPlaying(true))).toMatchSnapshot();
  });
  it("handles SET_PLAYBACK_SONG action", () => {
    expect(setPlayback(null, onSetPlayback({}))).toMatchSnapshot();
  });
});
