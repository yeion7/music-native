function getTracks(QUERY = '') {
  const URL = `https://api.spotify.com/v1/search/?q=${QUERY }&type=track`
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.tracks.items)
    .then(tracks => tracks.map(track => (
      {
        id: track.id,
        name: track.name,
        duration_ms: track.duration_ms,
        preview_url: track.preview_url,
        artists: track.artists[0],
        album: track.album
      }
    )))
}

export default getTracks
