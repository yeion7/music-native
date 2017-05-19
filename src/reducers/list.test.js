import React from "react";
import "react-native";

import { buildList, fetchReady } from "./list";
import { reciveItems, fetchReady as fetchAction } from "../actions/list";

describe("list reducer test ", () => {
  it("returns the same state on an unhandled action", () => {
    expect(buildList(null, { type: "_NULL_" })).toMatchSnapshot();
  });

  it("returns the same state on an unhandled action", () => {
    expect(fetchReady(null, { type: "_NULL_" })).toMatchSnapshot();
  });

  it("handles RECIVE_ITEMS action", () => {
    expect(
      buildList(null, reciveItems({ tracks: [], albums: [] }))
    ).toMatchSnapshot();
  });

  it("handles FETCH_READY action", () => {
    expect(fetchReady(null, fetchAction(true))).toMatchSnapshot();
  });
});
