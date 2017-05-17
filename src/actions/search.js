import { fetchItems } from "../utils/api";
import { reciveItems } from "../actions/list";

export const changeSearch = text => ({
  type: "TYPING",
  text
});

export function fecthList(text) {
  const thunk = async (dispatch, getState) => {
    dispatch(changeSearch(text));

    const data = await fetchItems(text);

    dispatch(reciveItems(data));
  };

  thunk.meta = {
    debounce: {
      time: 500,
      key: "RECIVE_ITEMS",
      cancel: false
    }
  };

  return thunk;
}
