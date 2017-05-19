import React from "react";
import "react-native";

import Player from "./Player";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render Player component", () => {
    const tree = renderer
      .create(
        <Player
          onPlayPause={jest.fn}
          onNext={jest.fn}
          onBack={jest.fn}
          onExpand={jest.fn}
          onPressSong={jest.fn}
          isLoading={false}
          isPlaying={false}
          currentSong={{
            id: "0dMDz3n9qLfRXBNlRhK5U7",
            name: "Joe Tex, These Taming Blues",
            duration_ms: 330813,
            preview_url: "https://p.scdn.co/mp3-preview/45d2ad042bf08d7951076097a1f7f15677ab7a89?cid=null",
            artists: [
              {
                external_urls: {
                  spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                },
                href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                id: "57kIMCLPgkzQlXjblX7XXP",
                name: "Phosphorescent",
                type: "artist",
                uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
              }
            ],
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                  },
                  href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                  id: "57kIMCLPgkzQlXjblX7XXP",
                  name: "Phosphorescent",
                  type: "artist",
                  uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                }
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/0TticAuqNj26EhgT2Em3qD"
              },
              href: "https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD",
              id: "0TticAuqNj26EhgT2Em3qD",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ccd62a1aa5c66d581622a1be2c86cfd0299a3b45",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/1ea5645d08a452f50c9720aad99d4ea6e8cdd8b6",
                  width: 64
                }
              ],
              name: "Aw Come Aw Wry",
              type: "album",
              uri: "spotify:album:0TticAuqNj26EhgT2Em3qD"
            },
            track_number: 3
          }}
          playbackInstancePosition={10000}
          playbackInstanceDuration={5000}
          expanded={false}
          playList={[
            {
              id: "0dMDz3n9qLfRXBNlRhK5U7",
              name: "Joe Tex, These Taming Blues",
              duration_ms: 330813,
              preview_url: "https://p.scdn.co/mp3-preview/45d2ad042bf08d7951076097a1f7f15677ab7a89?cid=null",
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                  },
                  href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                  id: "57kIMCLPgkzQlXjblX7XXP",
                  name: "Phosphorescent",
                  type: "artist",
                  uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                }
              ],
              album: {
                album_type: "album",
                artists: [
                  {
                    external_urls: {
                      spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                    },
                    href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                    id: "57kIMCLPgkzQlXjblX7XXP",
                    name: "Phosphorescent",
                    type: "artist",
                    uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                  }
                ],
                external_urls: {
                  spotify: "https://open.spotify.com/album/0TticAuqNj26EhgT2Em3qD"
                },
                href: "https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD",
                id: "0TticAuqNj26EhgT2Em3qD",
                images: [
                  {
                    height: 640,
                    url: "https://i.scdn.co/image/ccd62a1aa5c66d581622a1be2c86cfd0299a3b45",
                    width: 640
                  },
                  {
                    height: 300,
                    url: "https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547",
                    width: 300
                  },
                  {
                    height: 64,
                    url: "https://i.scdn.co/image/1ea5645d08a452f50c9720aad99d4ea6e8cdd8b6",
                    width: 64
                  }
                ],
                name: "Aw Come Aw Wry",
                type: "album",
                uri: "spotify:album:0TticAuqNj26EhgT2Em3qD"
              },
              track_number: 3
            }
          ]}
          index={1}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Player component expanded", () => {
    const tree = renderer
      .create(
        <Player
          onPlayPause={jest.fn}
          onNext={jest.fn}
          onBack={jest.fn}
          onExpand={jest.fn}
          onPressSong={jest.fn}
          isLoading={false}
          isPlaying={false}
          currentSong={{
            id: "0dMDz3n9qLfRXBNlRhK5U7",
            name: "Joe Tex, These Taming Blues",
            duration_ms: 330813,
            preview_url: "https://p.scdn.co/mp3-preview/45d2ad042bf08d7951076097a1f7f15677ab7a89?cid=null",
            artists: [
              {
                external_urls: {
                  spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                },
                href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                id: "57kIMCLPgkzQlXjblX7XXP",
                name: "Phosphorescent",
                type: "artist",
                uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
              }
            ],
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                  },
                  href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                  id: "57kIMCLPgkzQlXjblX7XXP",
                  name: "Phosphorescent",
                  type: "artist",
                  uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                }
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/0TticAuqNj26EhgT2Em3qD"
              },
              href: "https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD",
              id: "0TticAuqNj26EhgT2Em3qD",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ccd62a1aa5c66d581622a1be2c86cfd0299a3b45",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/1ea5645d08a452f50c9720aad99d4ea6e8cdd8b6",
                  width: 64
                }
              ],
              name: "Aw Come Aw Wry",
              type: "album",
              uri: "spotify:album:0TticAuqNj26EhgT2Em3qD"
            },
            track_number: 3
          }}
          playbackInstancePosition={10000}
          playbackInstanceDuration={5000}
          expanded={true}
          playList={[
            {
              id: "0dMDz3n9qLfRXBNlRhK5U7",
              name: "Joe Tex, These Taming Blues",
              duration_ms: 330813,
              preview_url: "https://p.scdn.co/mp3-preview/45d2ad042bf08d7951076097a1f7f15677ab7a89?cid=null",
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                  },
                  href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                  id: "57kIMCLPgkzQlXjblX7XXP",
                  name: "Phosphorescent",
                  type: "artist",
                  uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                }
              ],
              album: {
                album_type: "album",
                artists: [
                  {
                    external_urls: {
                      spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                    },
                    href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                    id: "57kIMCLPgkzQlXjblX7XXP",
                    name: "Phosphorescent",
                    type: "artist",
                    uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                  }
                ],
                external_urls: {
                  spotify: "https://open.spotify.com/album/0TticAuqNj26EhgT2Em3qD"
                },
                href: "https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD",
                id: "0TticAuqNj26EhgT2Em3qD",
                images: [
                  {
                    height: 640,
                    url: "https://i.scdn.co/image/ccd62a1aa5c66d581622a1be2c86cfd0299a3b45",
                    width: 640
                  },
                  {
                    height: 300,
                    url: "https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547",
                    width: 300
                  },
                  {
                    height: 64,
                    url: "https://i.scdn.co/image/1ea5645d08a452f50c9720aad99d4ea6e8cdd8b6",
                    width: 64
                  }
                ],
                name: "Aw Come Aw Wry",
                type: "album",
                uri: "spotify:album:0TticAuqNj26EhgT2Em3qD"
              },
              track_number: 3
            }
          ]}
          index={1}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render Player component without playlist", () => {
    const tree = renderer
      .create(
        <Player
          onPlayPause={jest.fn}
          onNext={jest.fn}
          onBack={jest.fn}
          onExpand={jest.fn}
          onPressSong={jest.fn}
          isLoading={false}
          isPlaying={false}
          currentSong={{
            id: "0dMDz3n9qLfRXBNlRhK5U7",
            name: "Joe Tex, These Taming Blues",
            duration_ms: 330813,
            preview_url: "https://p.scdn.co/mp3-preview/45d2ad042bf08d7951076097a1f7f15677ab7a89?cid=null",
            artists: [
              {
                external_urls: {
                  spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                },
                href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                id: "57kIMCLPgkzQlXjblX7XXP",
                name: "Phosphorescent",
                type: "artist",
                uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
              }
            ],
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                  },
                  href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                  id: "57kIMCLPgkzQlXjblX7XXP",
                  name: "Phosphorescent",
                  type: "artist",
                  uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                }
              ],
              external_urls: {
                spotify: "https://open.spotify.com/album/0TticAuqNj26EhgT2Em3qD"
              },
              href: "https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD",
              id: "0TticAuqNj26EhgT2Em3qD",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ccd62a1aa5c66d581622a1be2c86cfd0299a3b45",
                  width: 640
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547",
                  width: 300
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/1ea5645d08a452f50c9720aad99d4ea6e8cdd8b6",
                  width: 64
                }
              ],
              name: "Aw Come Aw Wry",
              type: "album",
              uri: "spotify:album:0TticAuqNj26EhgT2Em3qD"
            },
            track_number: 3
          }}
          playbackInstancePosition={10000}
          playbackInstanceDuration={5000}
          expanded={true}
          playList={[]}
          index={1}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
