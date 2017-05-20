import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { Mock } from "../../../__mocks__/mock_function";
import mockStore from "../../../__mocks__/redux-mock-store";
import { albums, playlist } from "../../../__mocks__/mock_data";

import ResultsList from "../ResultsList";

const store = mockStore({});

describe("renders test ", () => {
  it("render ResultsList component", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ResultsList
            tracks={playlist}
            albums={albums}
            handlePress={Mock}
            handlePressAlbum={Mock}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
