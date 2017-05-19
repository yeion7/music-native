import React from "react";
import "react-native";

import SongItem from "./SongItem";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render SongItem component", () => {
    const tree = renderer
      .create(
        <SongItem
          id="53Dj5PCDhb22qWqmre3YQs"
          name="Aw Naw"
          duration_ms="188706"
          handlePress={jest.fn()}
          artists={[
            {
              href: "https://api.spotify.com/v1/artists/4BYxqVkZyFjtik7crYLg5Q",
              id: "4BYxqVkZyFjtik7crYLg5Q",
              name: "Chris Young",
              type: "artist",
              uri: "spotify:artist:4BYxqVkZyFjtik7crYLg5Q"
            }
          ]}
          preview_url="https://p.scdn.co/mp3-preview/e8fbbea2af7f94d66a16abe972a2b5a6d7840f5a?cid=null"
          album={{
            images: [
              {
                height: "640",
                url: "https://i.scdn.co/image/79eddf061ab3d4761efacb595b0cc393bb49382d",
                width: "640"
              },
              {
                height: "300",
                url: "https://i.scdn.co/image/8056f7c1c26af92f7d22ab0ce1975884903d3fa3",
                width: "300"
              },
              {
                height: "64",
                url: "https://i.scdn.co/image/7a931513f592b019f3bbb6ae2b5b4427203f003e",
                width: "64"
              }
            ]
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
