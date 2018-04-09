import {
  LOAD_CATEGORIES_START,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  LOAD_EMPLOYEES_START,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_FAILURE,
  SET_DATA,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
} from './../consts';
import { fetchCategoriesApi, fetchEmployeesApi, submitFormApi } from './../api';
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

export const loadEmployees = () => async (dispatch) => {
  dispatch({
    type: LOAD_EMPLOYEES_START,
  });

  try {
    const employees = await fetchEmployeesApi();
    dispatch({
      type: LOAD_EMPLOYEES_SUCCESS,
      payload: employees,
    });
  } catch (err) {
    dispatch({
      type: LOAD_EMPLOYEES_FAILURE,
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

export const submitForm = formData => async (dispatch) => {
  try {
    const result = await submitFormApi(formData);
    dispatch({
      type: SUBMIT_FORM_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: SUBMIT_FORM_FAILURE,
    });
  }
};
