/**
 * Validate value by type
 * @param type
 * @param {string} value
 * @returns {bool} Valid or not
 */
export default (type, value) => {
  switch (type) {
    case 'text':
      // debugger; // eslint-disable-line
      return !!(value && value.length > 0);
    default:
      return null;
  }
};
