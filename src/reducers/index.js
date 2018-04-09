import {
  LOAD_CATEGORIES_START,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  SET_DATA,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
} from './../consts';

const initialState = {
  error: null,
  submit: null,
  valid: false,

  title: null,
  description: null,
  category: null,
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CATEGORIES_START:
      return { ...state, categories: [] };
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
      };
    case LOAD_CATEGORIES_FAILURE:
      return { ...state, categories: [] };

    case SET_DATA:
      return { ...state, [payload.id]: payload.value };

    case SUBMIT_FORM_SUCCESS:
      return { ...state, submit: true, error: null };
    case SUBMIT_FORM_FAILURE:
      return { ...state, submit: false, error: 'Error!!!' };
    default:
      return state;
  }
};
