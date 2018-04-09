import { LOAD_CATEGORIES_START, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAILURE, SET_DATA } from './../consts';

const initialState = {
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
    default:
      return state;
  }
};
