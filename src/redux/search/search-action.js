import { searchActionTypes } from "./search-types";

import {
  fetchVideos,
  fetchNextPageVideos,
  fetchTrending,
} from "./search-utils";

export const NewSearchItem = (searchItem) => {
  return { type: searchActionTypes.NEW_SEARCH_TITLE, payload: searchItem };
};

export const login = () => {
  return { type: searchActionTypes.LOGIN };
};

export const getVideos = (searchItem, offset) => {
  return async (dispatch) => {
    let data = await fetchVideos(searchItem, offset);
    dispatch({ type: searchActionTypes.SEARCH_ITEM_RESULT, payload: data });
  };
};

export const infiniteScroll = (searchItem, offset, nextPageToken) => {
  return async (dispatch) => {
    let data = await fetchNextPageVideos(searchItem, offset, nextPageToken);
    dispatch({ type: searchActionTypes.INFINITE_SCROLL, payload: data });
  };
};

export const getTrending = (offset) => {
  return async (dispatch) => {
    let data = await fetchTrending(offset);
    dispatch({ type: searchActionTypes.TRENDING, payload: data });
  };
};
