import React from "react";
import "react-native";
const myMock = jest.fn();

import Controls from "./Controls";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render Controls component playing false and index", () => {
    const tree = renderer
      .create(
        <Controls
          onBack={myMock}
          onPlayPause={myMock}
          onNext={myMock}
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
          onBack={myMock}
          onPlayPause={myMock}
          onNext={myMock}
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
          onBack={myMock}
          onPlayPause={myMock}
          onNext={myMock}
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
          onBack={myMock}
          onPlayPause={myMock}
          onNext={myMock}
          isPlaying={true}
          index={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
