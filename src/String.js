(function (nx, global) {

  var blankLeftRE = /^\s+/g;
  var blankRightRE = /\s+$/g;
  var location = global.location;

  nx.declare('nx.lang.String', {
    statics: {
      trim: function (inString) {
        return String(inString)
          .replace(blankLeftRE, '')
          .replace(blankRightRE, '');
      },
      camelCase: function (inString) {
        return inString.replace(/-\D/g, function (match) {
          return match.charAt(1).toUpperCase();
        });
      },
      hyphenate: function (inString) {
        return inString.replace(/[A-Z]/g, function (match) {
          return ('-' + match.charAt(0).toLowerCase());
        });
      },
      capitalize: function (inString) {
        return inString.charAt(0).toUpperCase() + inString.slice(1);
      }
    }
  });

}(nx, nx.GLOBAL));
