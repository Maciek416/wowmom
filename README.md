wowmom
======

[![NPM](https://nodei.co/npm/wowmom.png)](https://nodei.co/npm/wowmom/)

A wowmom text transformation module for nodejs ... You really had to be there.


```javascript

var wowmom = require('./index');

console.log(wowmom('wow'));
console.log(wowmom('w o w'));
console.log(wowmom('m o m'));
console.log(wowmom('M O M'));
console.log(wowmom('W  O  W   M  O  M'));
console.log(wowmom('wow really?'));
console.log(wowmom('hi mom'));

// Output:
// mom
// m o m
// w o w
// W O W
// M  O  M   W  O  W
// mom really?
// hi wow

```
