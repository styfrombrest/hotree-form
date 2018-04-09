export const textValidator = (name, value) => {
  if (value !== null && value.length <= 0) {
    return true;
  }
  return false;
};
