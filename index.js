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
    firstTrans = first.split('').map(trans).join('');
    lastTrans = last.split('').map(trans).join('');
    return firstTrans + mid + lastTrans;
  });
};
