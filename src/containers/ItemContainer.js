/* @flow */

import React, { Component } from "react";

import Item from "../components/Item";

import { playSong } from "../actions/player";
import { connect } from "react-redux";

class ItemContainer extends Component {
  render() {
    return <Item {...this.props} />;
  }
}

const mapDispatch = (dispatch, props) => ({
  onPressSong() {
    dispatch(playSong(props));
  }
});

export default connect(null, mapDispatch)(ItemContainer);
