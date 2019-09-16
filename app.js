'use strict';

var seattle = {
  min : 23,
  max : 65,
  avg : 6.3
};
function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var test = random(seattle.min, seattle.max);
random(seattle.min, seattle.max);
console.log(test);
