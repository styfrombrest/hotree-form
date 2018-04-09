import { LOAD_CATEGORIES_START, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAILURE, SET_DATA } from './../consts';
import fetchCategoriesApi from './../api';

export const loadCategories = () => async (dispatch) => {
  dispatch({
    type: LOAD_CATEGORIES_START,
  });

  try {
    const categories = await fetchCategoriesApi();
    dispatch({
      type: LOAD_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch (err) {
    dispatch({
      type: LOAD_CATEGORIES_FAILURE,
      payload: err,
    });
  }
};

export const setData = (id, value) => async (dispatch) => {
  // debugger; // eslint-disable-line
  dispatch({
    type: SET_DATA,
    payload: {
      id,
      value,
    },
  });
};

export const setTitle = () => {};
