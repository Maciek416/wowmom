var trans = {
  'W': 'M',
  'w': 'm',
  'm': 'w',
  'M': 'W'
};

module.exports = function(text) {
  var regex = /(m|w)(\s*o\s*)(m|w)/gi;
  return text.replace(regex, function(match, first, mid, last) {
    return trans[first] + mid + trans[last];
  });
};
