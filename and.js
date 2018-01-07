/* jshint esversion: 6 */

module.exports = (data, separator = '&', oxfordComma = false) => {
  const input = [].concat(data);
  const lastItem = input.pop();
  if (input.length) {
    return`${input.join(', ')}${oxfordComma ? ',': ''} ${separator} ${lastItem}`.trim();
  } else {
    return lastItem;
  }
};
