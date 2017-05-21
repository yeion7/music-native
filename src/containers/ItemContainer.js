/* @flow */

import React, { Component } from "react";

import Item from "../components/Item";

import { onSetSong } from "../actions/player";
import { error } from "../utils/error";

import { connect } from "react-redux";

class ItemContainer extends Component {
  render() {
    return <Item {...this.props} />;
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

export default connect(null, mapDispatch)(ItemContainer);
