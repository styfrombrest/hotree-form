/**
 * Validate value by type
 * @param type
 * @param {string} value
 * @returns {bool} Valid or not
 */
export default (type, value) => {
  // eslint-disable-next-line
  const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phone = /^[+]?[0-9]{9,12}$/;

  switch (type) {
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
