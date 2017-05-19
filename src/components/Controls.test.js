import React from "react";
import "react-native";

import Controls from "./Controls";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render Controls component playing false and index", () => {
    const tree = renderer
      .create(
        <Controls
          onBack={jest.fn}
          onPlayPause={jest.fn}
          onNext={jest.fn}
          isPlaying="false"
          index={1}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Controls component playing true and index", () => {
    const tree = renderer
      .create(
        <Controls
          onBack={jest.fn}
          onPlayPause={jest.fn}
          onNext={jest.fn}
          isPlaying="true"
          index={1}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Controls component playing false and without index", () => {
    const tree = renderer
      .create(
        <Controls
          onBack={jest.fn}
          onPlayPause={jest.fn}
          onNext={jest.fn}
          isPlaying="false"
          index={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Controls component playing true and without index", () => {
    const tree = renderer
      .create(
        <Controls
          onBack={jest.fn}
          onPlayPause={jest.fn}
          onNext={jest.fn}
          isPlaying="true"
          index={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
