import { fetchItems } from "../utils/api";
import { reciveItems, fetchReady } from "../actions/list";

export const changeSearch = text => ({
  type: "TYPING",
  text
});

export function fecthList(text) {
  const thunk = async (dispatch, getState) => {
    dispatch(changeSearch(text));

    const data = await fetchItems(text);
    dispatch(fetchReady(true));
    dispatch(reciveItems(data));
  };

  thunk.meta = {
    debounce: {
      time: 300,
      key: "RECIVE_ITEMS",
      cancel: false
    }
  };

  return thunk;
}
