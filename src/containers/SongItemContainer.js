/* @flow */

import React, { Component } from "react";

import SongItem from "../components/SongItem";
import { error } from "../utils/error";

import { onSetSong } from "../actions/player";
import { connect } from "react-redux";

class SongItemContainer extends Component {
  render() {
    return <SongItem {...this.props} />;
  }
}

const mapDispatch = (dispatch, props) => ({
  onPressSong() {
    if (props.preview_url) {
      dispatch(onSetSong({ ...props, track_number: null }));
    } else {
      error("Canción sin URL");
    }
  }
});
export default connect(null, mapDispatch)(SongItemContainer);
