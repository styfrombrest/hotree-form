import {
  LOAD_CATEGORIES_START,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  SET_DATA,
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
} from './../consts';
import { fetchCategoriesApi, submitFormApi } from './../api';

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

// dispatch data from form
export const setData = (id, value) => async (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: {
      id,
      value,
    },
  });
};

export const submitForm = () => async (dispatch) => {
  dispatch({
    type: SUBMIT_FORM_START,
  });

  try {
    const result = await submitFormApi();
    dispatch({
      type: SUBMIT_FORM_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: SUBMIT_FORM_FAILURE,
    });
  }
};
