var wowmom = require('./index');

console.log(wowmom('wow') === 'mom');
console.log(wowmom('wwwwwowwwwww') === 'mmmmmommmmmm');
console.log(wowmom('wmwmwowmwmwm') === 'mwmwmomwmwmw');
console.log(wowmom('w o w') === 'm o m');
console.log(wowmom('m o m') === 'w o w');
console.log(wowmom('M O M') === 'W O W');
console.log(wowmom('W  O  W   M  O  M') === 'M  O  M   W  O  W');
console.log(wowmom('wow really?') === 'mom really?');
console.log(wowmom('hi mom') === 'hi wow');
