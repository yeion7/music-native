import React from "react";
import "react-native";

import Info from "./Info";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render Info component", () => {
    const tree = renderer
      .create(
        <Info song={{ name: "Aw Naw" }} position={40000} duration={10000} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
