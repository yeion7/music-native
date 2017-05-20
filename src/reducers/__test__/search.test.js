import React from "react";
import "react-native";

import { search } from "../search";
import { changeSearch } from "../../actions/search";

describe("search reducer test ", () => {
  it("returns the same state on an unhandled action", () => {
    expect(search(null, { type: "_NULL_" })).toMatchSnapshot();
  });

  it("handles TYPING action", () => {
    expect(search(null, changeSearch("La wa"))).toMatchSnapshot();
  });
});
