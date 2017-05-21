/* @flow */

import React, { Component } from "react";

import Item from "../components/Item";

import { onSetSong } from "../actions/player";
import { connect } from "react-redux";

class ItemContainer extends Component {
  render() {
    return <Item {...this.props} />;
  }
}

const mapDispatch = (dispatch, props) => ({
  onPressSong() {
    dispatch(onSetSong(props));
  }
});

export default connect(null, mapDispatch)(ItemContainer);
