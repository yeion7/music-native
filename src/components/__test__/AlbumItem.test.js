import React from "react";
import renderer from "react-test-renderer";
import "react-native";

import { Mock } from "../../../__mocks__/mock_function";
import { albums } from "../../../__mocks__/mock_data";

import AlbumItem from "../AlbumItem";

describe("renders test ", () => {
  it("render AlbumItem component", () => {
    const tree = renderer
      .create(<AlbumItem {...albums[0]} handlePress={Mock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
