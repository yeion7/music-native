export function setItems(
  state = {
    text: "",
    items: {
      tracks: [],
      albums: []
    },
    fetchReady: false
  },
  action
) {
  switch (action.type) {
    case "FETCH_ITEMS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
