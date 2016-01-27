var assert=require('assert');
var nx=require('next-js-core');
var StringUtil=require('../src/String');
describe('String', function() {
  describe('#trim()', function () {
    it('trim string', function () {
      var abc='  abc  ';
      var rt1=StringUtil.trim(abc);
      assert.equal('abc',rt1);
    });
  });

  describe('#camelCase()', function () {
    it('camelCase string', function () {
      var str2='font-size';
      var rt1=StringUtil.camelCase(str2);
      assert.equal('fontSize',rt1);
    });
  });

  describe('#hyphenate()', function () {
    it('hyphenate string', function () {
      var str3='fontWeight';
      var rt1=StringUtil.hyphenate(str3);
      assert.equal('font-weight',rt1);
    });
  });

  describe('#capitalize()', function () {
    it('capitalize string', function () {
      var str3='capitalize';
      var rt1=StringUtil.capitalize(str3);
      assert.equal('Capitalize',rt1);
    });
  });

  describe('#repeat()', function () {
    it('repeat char', function () {
      var str3='a';
      var rt1=StringUtil.repeat(str3,3);
      assert.equal('aaa',rt1);
    });
  });

});
