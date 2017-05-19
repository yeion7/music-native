import React from "react";
import "react-native";

import Searcher from "./Searcher";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render Seacher component", () => {
    const tree = renderer.create(<Searcher onChange={jest.fn} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
