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
  new Promise((resolve, reject) => {
    // MOCK output
    const output = {};
    Object.keys(formData).map((key) => {
      /*       switch (key) {
        case ''
      } */
      output[key] = formData[key].value;
      return true;
    });
    console.log(output); // eslint-disable-line

    resolve(true);
    // reject(true);
  });
