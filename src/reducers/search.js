export function search(
  state = {
    text: ""
  },
  action
) {
  switch (action.type) {
    case "TYPING":
      return (state.text = "funciona");
      break;
    default:
      return state;
  }
}
