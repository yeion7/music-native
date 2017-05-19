import React from "react";
import "react-native";

import App from "./App";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render App component", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
