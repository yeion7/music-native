export function fetchItems(QUERY = "") {
  const URL = `https://api.spotify.com/v1/search/?q=${QUERY}&type=track,album&limit=1`;
  return fetch(URL).then(response => response.json()).then(data => ({
    albums: data.albums.items.map(album => formateAlbum(album)),
    tracks: data.tracks.items.map(track => formateTracks(track))
  }));
}

export function formateTracks(track) {
  return {
    id: track.id,
    name: track.name,
    duration_ms: track.duration_ms,
    preview_url: track.preview_url,
    artists: track.artists,
    album: track.album,
    track_number: track.track_number || 0
  };
}

export function formateAlbum(album) {
  return {
    id: album.id,
    name: album.name,
    image: album.images[1].url,
    artists: album.artists[0],
    url_songs: album.href,
    type: album.type
  };
}
