const isPalindrome = require('./isPalindrome')
const toLowerCase = require('./toLowerCase')
const capitalizeString = require('./capitalizeString')

module.exports = () => {
    return Math.floor(Date.now() / 1000);
  }