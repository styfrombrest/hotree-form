import moment from 'moment';
import phones from './../mocks/categories.json';
import employees from './../mocks/employees.json';

export const fetchCategoriesApi = async () =>
  new Promise((resolve) => {
    // Mock for categories
    resolve(phones);
  });

export const fetchEmployeesApi = async () =>
  new Promise((resolve) => {
    // Mock for categories
    resolve(employees);
  });

export const submitFormApi = async formData =>
  new Promise((resolve) => {
    // MOCK output adapter
    const output = {};
    Object.keys(formData).map((key) => {
      switch (key) {
        case 'category':
          output.category_id = formData[key].value;
          break;
        case 'coordinator':
          output.coordinator = {
            email: formData.email.value,
            id: formData[key].value,
          };
          break;
        case 'paidEvent':
          output.paid_event = formData[key].values.some(item => (item.id === formData[key].value ? item.value : false));
          break;
        case 'eventFee':
          break;
        case 'duration':
          break;
        case 'reward':
          output[key] = +formData[key].value;
          break;
        case 'date':
        case 'time':
        case 'email':
          break;
        default:
          output[key] = formData[key].value;
      }
      return true;
    });
    output.date = moment(`${formData.date.value} ${formData.time.value}`, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDThh:mm');
    if (output.paid_event === true) {
      output.event_fee = +formData.eventFee.value;
    }
    output.duration = moment.duration(+formData.duration.value, 'hours').asSeconds();
    console.log(output); // eslint-disable-line

    resolve(true);
  });
