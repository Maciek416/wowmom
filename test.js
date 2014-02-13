var test = require('tape').test;

var wowmom = require('./index');

test('wowmom', function (t) {
  t.equals(wowmom('wow'), 'mom');
  t.equals(wowmom('wwwwwowwwww'), 'mmmmmommmmm');
  // This one no longer supported...
  //t.equals(wowmom('wmwmwowmwmwm'), 'mwmwmomwmwmw');
  t.equals(wowmom('w o w'), 'm o m');
  t.equals(wowmom('m o m'), 'w o w');
  t.equals(wowmom('M O M'), 'W O W');
  t.equals(wowmom('W  O  W   M  O  M'), 'M  O  M   W  O  W');
  t.equals(wowmom('wow really?'), 'mom really?');
  t.equals(wowmom('hi mom'), 'hi wow');
  t.equals(wowmom('woman'), 'woman')
  t.equals(wowmom('w:o:w m_O_m M  O  M'), 'm:o:m w_O_w W  O  W')
  t.equals(wowmom('m_O_m'), 'w_O_w')
  t.equals(wowmom('w0w'), 'm0m')
  t.end();
});
