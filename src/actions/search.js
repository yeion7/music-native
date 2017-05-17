import { fetchItems } from "../utils/api";
import { reciveItems } from "../actions/list";

export const changeSearch = text => ({
  type: "TYPING",
  text
});

export function fecthList(text) {
  return async (dispatch, getState) => {
    dispatch(changeSearch(text));

    const data = await fetchItems(text);

    dispatch(reciveItems(data));
  };
}
