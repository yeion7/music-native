import React from "react";
import "react-native";

import { setItems } from "../search";
import { onSetItems } from "../../actions/search";

describe("search reducer test ", () => {
  it("returns the same state on an unhandled action", () => {
    expect(setItems(null, { type: "_NULL_" })).toMatchSnapshot();
  });

  it("handles TYPING action", () => {
    expect(
      setItems(
        null,
        onSetItems({
          text: "aw",
          items: {
            tracks: [],
            albums: []
          },
          fetchReady: true
        })
      )
    ).toMatchSnapshot();
  });
});
