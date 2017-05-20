import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import { Mock } from "../../../__mocks__/mock_function";

import Controls from "../Controls";

describe("renders test ", () => {
  it("render Controls component playing false and index", () => {
    const tree = renderer
      .create(
        <Controls
          onBack={Mock}
          onPlayPause={Mock}
          onNext={Mock}
          isPlaying={false}
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
          onBack={Mock}
          onPlayPause={Mock}
          onNext={Mock}
          isPlaying={true}
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
          onBack={Mock}
          onPlayPause={Mock}
          onNext={Mock}
          isPlaying={false}
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
          onBack={Mock}
          onPlayPause={Mock}
          onNext={Mock}
          isPlaying={true}
          index={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
