/* @flow */

import React, { Component } from "react";

import Searcher from "../components/Searcher";
import { connect } from "react-redux";
import { fecthList } from "../actions/search";

class SearcherContainer extends Component {
  render() {
    return <Searcher {...this.props} />;
  }
}

const mapStateToProps = ({ search: { text } }) => ({
  text
});

export default connect(mapStateToProps, { onChange: fecthList })(
  SearcherContainer
);
