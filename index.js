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
  var regex = /(([wm])\2*)([^a-zA-Z]*)([o0]+)(\3)(\1)/gi;
  return text.replace(regex, function (str, first, garbage, sep, oh, sep2, last, idx, full) {
    var firstTrans = first.split('').map(trans).join('');
    var lastTrans = last.split('').map(trans).join('');
    return firstTrans + sep + oh + sep + lastTrans;
  });
};
