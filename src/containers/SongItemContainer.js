/* @flow */

import React, { Component } from "react";

import SongItem from "../components/SongItem";

import { onSetSong } from "../actions/player";
import { connect } from "react-redux";

class SongItemContainer extends Component {
  render() {
    return <SongItem {...this.props} />;
  }
}

const mapDispatch = (dispatch, props) => ({
  onPressSong() {
    dispatch(onSetSong(props));
  }
});
export default connect(null, mapDispatch)(SongItemContainer);
