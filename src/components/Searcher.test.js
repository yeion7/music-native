import React from "react";
import "react-native";
const myMock = jest.fn();

import Searcher from "./Searcher";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render Seacher component", () => {
    const tree = renderer.create(<Searcher onChange={myMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
