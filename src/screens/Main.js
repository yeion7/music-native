/* @flow */

import React, { Component } from "react";

import { Container } from "native-base";

import ResultsListContainer from "../containers/ResultsListContainer";
import SearcherContainer from "../containers/SearcherContainer";
import PlayerContainer from "../containers/PlayerContainer";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <SearcherContainer />
        <ResultsListContainer />
        <PlayerContainer />
      </Container>
    );
  }
}
