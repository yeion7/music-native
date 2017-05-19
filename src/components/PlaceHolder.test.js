import React from "react";
import "react-native";

import PlaceHolder from "./PlaceHolder";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render PlaceHolder component", () => {
    const tree = renderer.create(<PlaceHolder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
