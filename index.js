var trans = {
  'W': 'M',
  'w': 'm',
  'm': 'w',
  'M': 'W'
};

module.exports = function(text) {
  if (text.replace(/w|o|m/gi,'').trim().length === 0 && text.length !== 0) {
    return text.split('').map(function(ch) {
      if (trans.hasOwnProperty(ch)) {
        return trans[ch];
      } else {
        return ch;
      }
    }).join('');
  }
};