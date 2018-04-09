import phones from './../mocks/categories.json';

export default async () =>
  new Promise((resolve) => {
    resolve(phones);
  });
