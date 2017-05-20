import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import { Mock } from "../../__mocks__/mock_function";
import { playlist } from "../../__mocks__/mock_data";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/redux-mock-store";

import PlayList from "./PlayList";

const store = mockStore({});

describe("renders test ", () => {
  it("render PlayList component", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlayList playList={playlist} onPressSong={Mock} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
