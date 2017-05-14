export function getTracks(QUERY = "") {
  const URL = `https://api.spotify.com/v1/search/?q=${QUERY}&type=track,album&limit=2`;
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.tracks.items)
    .then(tracks => tracks.map(formateTracks));
}

export function getAlbum(QUERY = "") {
  const URL = `https://api.spotify.com/v1/search/?q=${QUERY}&type=album&limit=2`;
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.albums.items)
    .then(albums => albums.map(formateAlbum));
}

export function formateTracks(track) {
  return {
    id: track.id,
    name: track.name,
    duration_ms: track.duration_ms,
    preview_url: track.preview_url,
    artists: track.artists[0] || null,
    album: track.album
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
