import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import PlaceHolder from "../PlaceHolder";

describe("renders test ", () => {
  it("render PlaceHolder component", () => {
    const tree = renderer.create(<PlaceHolder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
