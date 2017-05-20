import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import { Mock } from "../../../__mocks__/mock_function";

import Searcher from "../Searcher";

describe("renders test ", () => {
  it("render Seacher component", () => {
    const tree = renderer.create(<Searcher onChange={Mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
