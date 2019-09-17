'use strict';

var seattle = {
  name : 'Seattle',
  min : 23,
  max : 65,
  avg : 6.3,
  salesHour : [],

  custHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  avgCookies: function() {
    for(var i=0; i < this.custHour.length; i++){
      var sales = Math.floor(random(this.min, this.max) * this.avg);
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function random (min, max) {
  return (Math.random() * (max - min + 1) + min);
}
function render (object) {
  var storeData = document.getElementById('storeData'); 
  var ulElement = document.createElement('ul');
  for(var i=0; i <object.custHour.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = object.salesHour[i];
    ulElement.appendChild(listElement);
  }
  storeData.appendChild(ulElement);
}

seattle.avgCookies();
render(seattle);

var tokyo = {
  min : 3,
  max : 24,
  avg : 1.2,

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

tokyo.avgCookies();

var dubai = {
  min : 11,
  max : 38,
  avg : 3.7,

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

dubai.avgCookies();

var paris = {
  min : 20,
  max : 38,
  avg : 2.3,
  cookiesHour:[],

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

paris.avgCookies();


var lima = {
  min : 2,
  max : 16,
  avg : 4.6,

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

lima.avgCookies();
