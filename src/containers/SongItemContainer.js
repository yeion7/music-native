/* @flow */

import React, { Component } from "react";

import SongItem from "../components/SongItem";

import { playSong } from "../actions/player";
import { connect } from "react-redux";

class SongItemContainer extends Component {
  render() {
    return <SongItem {...this.props} />;
  }
}

const mapDispatch = (dispatch, props) => ({
  onPressSong() {
    dispatch(playSong(props));
  }
});
export default connect(null, mapDispatch)(SongItemContainer);
