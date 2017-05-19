/* @flow */

import React, { Component } from "react";
import { Content } from "native-base";

import PlaceHolder from "../components/PlaceHolder";
import ResultsList from "../components/ResultsList";

import { connect } from "react-redux";

class ResultListContainer extends Component {
  render() {
    const { fetchReady, text } = this.props;
    return (
      <Content>
        {fetchReady && text ? <ResultsList {...this.props} /> : <PlaceHolder />}
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.list.items.tracks,
  albums: state.list.items.albums,
  fetchReady: state.list.fetchReady,
  text: state.search
});

export default connect(mapStateToProps)(ResultListContainer);
