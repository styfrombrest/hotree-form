import {
  LOAD_CATEGORIES_START,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  LOAD_EMPLOYEES_START,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_FAILURE,
  SET_DATA,
  SET_EVENT_DATETIME,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
} from './../consts';

const initialState = {
  error: null,
  submit: null,
  formData: {
    title: {
      value: null,
      type: 'text',
      status: null,
    },
    description: {
      value: null,
      type: 'text',
      status: null,
    },
    category: {
      value: null,
    },
    paidEvent: {
      value: 'free',
      type: 'text',
      values: [
        {
          id: 'free',
          title: 'Free event',
          value: false,
        },
        {
          id: 'paid',
          title: 'Paid event',
          value: true,
        },
      ],
    },
    eventFee: {
      value: null,
      type: 'number',
      depend: [
        {
          field: 'paidEvent',
          value: 'paid',
        },
      ],
      status: null,
    },
    reward: {
      value: null,
      type: 'number',
      status: null,
    },
    email: {
      value: 'test@test.com',
      type: 'email',
      status: null,
    },
    phone: {
      value: null,
      type: 'phone',
      status: null,
    },
    coordinator: {
      value: 3,
    },
    date: {
      value: null,
      type: 'date',
      status: null,
    },
    time: {
      value: null,
      type: 'text',
      status: null,
    },
    duration: {
      value: null,
      type: 'number',
      status: null,
    },
  },

  categories: [],
  employees: [],
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

    case LOAD_EMPLOYEES_START:
      return { ...state, employees: [] };
    case LOAD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: payload,
      };
    case LOAD_EMPLOYEES_FAILURE:
      return { ...state, employees: [] };

    case SET_DATA:
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: { ...state.formData[payload.name], value: payload.value, status: payload.status } },
      };

    case SET_EVENT_DATETIME: {
      const { date: d, time: t } = payload;

      return {
        ...state,
        formData: {
          ...state.formData,
          date: { ...state.formData.date, value: d.value, status: d.status },
          time: { ...state.formData.time, value: t.value, status: t.status },
        },
      };
    }

    case SUBMIT_FORM_SUCCESS:
      return { ...state, submit: true, error: null };
    case SUBMIT_FORM_FAILURE:
      return { ...state, submit: false, error: 'Error!!!' };
    default:
      return state;
  }
};
