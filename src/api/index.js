import phones from './../mocks/categories.json';

export const fetchCategoriesApi = async () =>
  new Promise((resolve) => {
    // Mock for categories
    resolve(phones);
  });

export const submitFormApi = async () =>
  new Promise((resolve, reject) => {
    resolve(true);
    // reject(true);
  });
