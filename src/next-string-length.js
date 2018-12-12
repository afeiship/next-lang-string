(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.stringLength = function(inString) {
    var result = 0;
    if (typeof inString === 'string') {
      for (var i = 0; i < inString.length; i++) {
        var code = inString.charCodeAt(i);
        var step = code > 0 && code < 128 ? 1 : 2;
        result += step;
      }
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.stringLength;
  }
})();
