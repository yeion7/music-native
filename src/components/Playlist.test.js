import React from "react";
import "react-native";

import PlayList from "./PlayList";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render PlayList component", () => {
    const tree = renderer
      .create(
        <PlayList
          playList={[
            {
              id: "53Dj5PCDhb22qWqmre3YQs",
              name: "Aw Naw",
              duration_ms: "188706"
            }
          ]}
          onPressSong={jest.fn}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
