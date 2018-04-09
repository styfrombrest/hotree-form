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
// import validators from './../validators/';

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
export const setData = (name, value, validationStatus) => async (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: {
      name,
      value,
      status: validationStatus,
    },
  });
};

export const submitForm = validationData => async (dispatch) => {
  // Data validation
  // console.log('validationData', validationData);
  /*   Object.keys(validationData).map((key) => {
    console.log(validationData[key]);
    const { type, status, value } = validationData[key];
    if (type && status !== validators(type, value)) {
      validators(type, value);
    }
    return validationData[key];
  });
 */
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
