'use strict';

function trans(letter){
  var translation = {
    'W': 'M',
    'w': 'm',
    'm': 'w',
    'M': 'W'
  };
  return translation[letter];
}

module.exports = function(text) {
  var regex = /([mw]+)(\s*o\s*)([mw]+)/gi;
  return text.replace(regex, function(match, first, mid, last) {
    var firstTrans = first.split('').map(trans).join('');
    var lastTrans = last.split('').map(trans).join('');
    return firstTrans + mid + lastTrans;
  });
};
