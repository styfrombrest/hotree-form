/**
 * Validate value by type
 * @param type
 * @param {string} value
 * @returns {bool} Valid or not
 */
export default (type, value) => {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  switch (type) {
    case 'text':
      // debugger; // eslint-disable-line
      return !!(value && value.length > 0);
    case 'email':
      // debugger; // eslint-disable-line
      console.log('valid:', !!(value && value.length > 0 && re.test(value)));
      return !!(value && value.length > 0 && re.test(value));
    default:
      return null;
  }
};
