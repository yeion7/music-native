/* @flow */

import React, { Component } from "react";

import { Container } from "native-base";

import ResultsListContainer from "../containers/ResultsListContainer";
import SearcherContainer from "../containers/SearcherContainer";
import PlayerContainer from "../containers/PlayerContainer";

import Expo, { Audio } from "expo";

export default class Main extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    });
  }

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
