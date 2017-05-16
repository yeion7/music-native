/* @flow */

import React, { Component } from "react";

import Searcher from "../components/Searcher";
import { connect } from "react-redux";
import { changeSearch } from "../actions/search";

class SearcherContainer extends Component {
  render() {
    return <Searcher {...this.props} />;
  }
}

const mapStateToProps = state => ({
  text: state.search.text
});

const mapDispatchToProps = dispatch => ({
  onChange: text => dispatch(changeSearch(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearcherContainer);
