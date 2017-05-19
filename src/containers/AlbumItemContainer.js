/* @flow */

import React, { Component } from "react";

import AlbumItem from "../components/AlbumItem";

import { fecthAlbum } from "../actions/player";
import { connect } from "react-redux";

class AlbumItemContainer extends Component {
  render() {
    return <AlbumItem {...this.props} />;
  }
}

const mapDispatch = (dispatch, props) => ({
  handlePressAlbum() {
    dispatch(fecthAlbum(props.url_songs));
  }
});
export default connect(null, mapDispatch)(AlbumItemContainer);
