export function search(
  state = {
    text: ""
  },
  action
) {
  switch (action.type) {
    case "TYPING":
      return action.text;
      break;
    default:
      return state;
  }
}
