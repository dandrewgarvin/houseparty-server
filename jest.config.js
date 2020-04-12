module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testRegex: '(/__tests__/.(?!style-mock)|(\\.|/)(test|spec))\\.jsx?$',
};