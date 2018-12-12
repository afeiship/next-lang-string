var nx = require('next-js-core2');
require('../src/next-string-length');

test('Statndard test:', () => {
  //Not string will return 0:
  expect(nx.stringLength(null)).toBe(0);
  expect(nx.stringLength(0)).toBe(0);
  expect(nx.stringLength(false)).toBe(0);
  expect(nx.stringLength(undefined)).toBe(0);
  //normal string value:
  expect(nx.stringLength('a')).toBe(1);
  expect(nx.stringLength('abc')).toBe(3);
  expect(nx.stringLength('阿飞')).toBe(4);
  expect(nx.stringLength('阿飞-afei')).toBe(9);
});
