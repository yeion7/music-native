import React from "react";
import "react-native";
const myMock = jest.fn();

import AlbumItem from "./AlbumItem";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render AlbumItem component", () => {
    const tree = renderer
      .create(
        <AlbumItem
          id="0TticAuqNj26EhgT2Em3qD"
          image="https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547"
          name="Aw Come Aw Wry"
          type="album"
          url_songs="https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD"
          artists={{
            href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
            id: "57kIMCLPgkzQlXjblX7XXP",
            name: "Phosphorescent",
            type: "artist",
            uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
          }}
          handlePress={myMock}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
