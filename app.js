'use strict';

var seattle = {
  min : 23,
  max : 65,
  avg : 6.3,

  salesHour : [],
  custHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  avgCookies: function() {
    for(var i=0; i < this.custHour.length; i++){
      var sales = (random(this.min, this.max) * this.avg);
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

seattle.avgCookies();
