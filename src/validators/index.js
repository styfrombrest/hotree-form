/**
 * Validate value by type
 * @param type
 * @param {string} value
 * @returns {bool} Valid or not
 */
export const validator = (type, value) => {
  // eslint-disable-next-line
  const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phone = /^[+]?[0-9]{9,12}$/;

  switch (type) {
    case 'bool':
      return typeof value === 'boolean';
    case 'text':
    case 'number':
      // debugger; // eslint-disable-line
      return !!(value && value.length > 0);
    case 'phone':
      return !!(value && value.length > 0 && phone.test(value));
    case 'email':
      // debugger; // eslint-disable-line
      return !!(value && value.length > 0 && email.test(value));
    default:
      return null;
  }
};

/**
 * Check if required data fields in store is valid
 * Is used to enable / disable app submit
 * @param {object} formData from store
 */
export const isFormDataInvalid = (formData) => {
  Object.keys(formData).some((key) => {
    const { type, value, depend } = formData[key];

    // some of fields are necessary only if its dependencies has concrete values(e.g. fee)
    let isNecessaryToCheck = true;
    if (depend) {
      depend.some((rule) => {
        if (formData[rule.field].value !== rule.value) {
          isNecessaryToCheck = false;
          return true;
        }
        return false;
      });
    }

    // validation
    return isNecessaryToCheck && type ? !validator(type, value) : null;
  });
};
