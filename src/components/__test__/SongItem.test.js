import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import { Mock } from "../../../__mocks__/mock_function";
import { song } from "../../../__mocks__/mock_data";

import SongItem from "../SongItem";

describe("renders test ", () => {
  it("render SongItem component", () => {
    const tree = renderer.create(<SongItem {...song} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
