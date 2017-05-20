import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import { song } from "../../../__mocks__/mock_data";
import { Mock } from "../../../__mocks__/mock_function";

import Item from "../Item";

describe("renders test ", () => {
  it("render Item component", () => {
    const tree = renderer
      .create(<Item {...song} onPressSong={Mock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
