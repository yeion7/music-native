import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { Mock } from "../../../__mocks__/mock_function";
import { song, playlist, status } from "../../../__mocks__/mock_data";
import mockStore from "../../../__mocks__/redux-mock-store";

const store = mockStore({
  player: {
    song,
    playlist,
    status
  }
});

import Player from "../Player";

describe("renders test ", () => {
  it("render Player component", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Player
            onPlayPause={Mock}
            onNext={Mock}
            onBack={Mock}
            onExpand={Mock}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Player component expanded", () => {
    const tree = renderer
      .create(
        <Provider store={store}>

          <Player
            onPlayPause={Mock}
            onNext={Mock}
            onBack={Mock}
            onExpand={Mock}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Player component without playlist", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Player
            onPlayPause={Mock}
            onNext={Mock}
            onBack={Mock}
            onExpand={Mock}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
