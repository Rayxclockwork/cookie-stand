'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
  name : 'Seattle',
  min : 23,
  max : 65,
  avg : 6.3,
  salesHour : [],// [150, 45, 950, 150, ....]
  total: 0,
  avgCookies: function() {
    for(var i=0; i < hours.length; i++){
      // creates the random number of customers per hour and multplies it by the average number
      var sales = Math.floor(random(this.min, this.max) * this.avg);
      this.total += sales;
      // updates the SalesHour array with the hourly total of sales 
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
  render: function() {
    // populate the sales for the day for the store
    this.avgCookies();
    // retrieving an existing element on the html page
    var storeData = document.getElementById('storeData');
  
    // this is the city header and populates it with the name of the city
    var storeName = document.createElement('h4');
    storeName.textContent = this.name;
    // attach the store name to the store data tag on the html
    storeData.appendChild(storeName);
  
    var ulElement = document.createElement('ul');
    // going through every hour of the day and populates the hour and the average cookie sold as a list item
    for(var i=0; i < hours.length; i++){
      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.salesHour[i]}`;
      ulElement.appendChild(listElement);
    }
    // creating the final bullet with the totals for the day
    listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.total}`;
    ulElement.appendChild(listElement);
    storeData.appendChild(ulElement);
  }
};

function random (min, max) {
  // random number between 0-1 with Math.Random
  // multiply that by our min and max numbers inclusively. 
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return (Math.random() * (max - min + 1) + min);
}
// the parameters of this function is the cookie store for a specific city


var tokyo = {
  name: 'Tokyo',
  min : 3,
  max : 24,
  avg : 1.2,
  total: 0,

  salesHour : [],
  avgCookies: function() {
    for(var i=0; i < hours.length; i++){
      var sales = Math.floor(random(this.min, this.max) * this.avg);
      this.total += sales;
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
  render: function() {
    // populate the sales for the day for the store
    this.avgCookies();
    // retrieving an existing element on the html page
    var storeData = document.getElementById('storeData');
  
    // this is the city header and populates it with the name of the city
    var storeName = document.createElement('h4');
    storeName.textContent = this.name;
    // attach the store name to the store data tag on the html
    storeData.appendChild(storeName);
  
    var ulElement = document.createElement('ul');
    // going through every hour of the day and populates the hour and the average cookie sold as a list item
    for(var i=0; i < hours.length; i++){
      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.salesHour[i]}`;
      ulElement.appendChild(listElement);
    }
    // creating the final bullet with the totals for the day
    listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.total}`;
    ulElement.appendChild(listElement);
    storeData.appendChild(ulElement);
  }
};

var dubai = {
  name: 'Dubai',
  min : 11,
  max : 38,
  avg : 3.7,
  total: 0,
  salesHour : [],
  avgCookies: function() {
    for(var i=0; i < hours.length; i++){
      var sales = Math.floor(random(this.min, this.max) * this.avg);
      this.total += sales;
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
  render: function() {
    // populate the sales for the day for the store
    this.avgCookies();
    // retrieving an existing element on the html page
    var storeData = document.getElementById('storeData');
  
    // this is the city header and populates it with the name of the city
    var storeName = document.createElement('h4');
    storeName.textContent = this.name;
    // attach the store name to the store data tag on the html
    storeData.appendChild(storeName);
  
    var ulElement = document.createElement('ul');
    // going through every hour of the day and populates the hour and the average cookie sold as a list item
    for(var i=0; i < hours.length; i++){
      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.salesHour[i]}`;
      ulElement.appendChild(listElement);
    }
    // creating the final bullet with the totals for the day
    listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.total}`;
    ulElement.appendChild(listElement);
    storeData.appendChild(ulElement);
  }
};

var paris = {
  name: 'Paris',
  min : 20,
  max : 38,
  avg : 2.3,
  total: 0,
  cookiesHour:[],
  salesHour : [],
   avgCookies: function() {
    for(var i=0; i < hours.length; i++){
      var sales = Math.floor(random(this.min, this.max) * this.avg);
      this.total += sales;
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
  render: function() {
    // populate the sales for the day for the store
    this.avgCookies();
    // retrieving an existing element on the html page
    var storeData = document.getElementById('storeData');
  
    // this is the city header and populates it with the name of the city
    var storeName = document.createElement('h4');
    storeName.textContent = this.name;
    // attach the store name to the store data tag on the html
    storeData.appendChild(storeName);
  
    var ulElement = document.createElement('ul');
    // going through every hour of the day and populates the hour and the average cookie sold as a list item
    for(var i=0; i < hours.length; i++){
      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.salesHour[i]}`;
      ulElement.appendChild(listElement);
    }
    // creating the final bullet with the totals for the day
    listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.total}`;
    ulElement.appendChild(listElement);
    storeData.appendChild(ulElement);
  }
};

var lima = {
  name:'Lima',
  min : 2,
  max : 16,
  avg : 4.6,
  total: 0,
  salesHour : [],
  avgCookies: function() {
    for(var i=0; i < hours.length; i++){
      var sales = Math.floor(random(this.min, this.max) * this.avg);
      this.total += sales;
      this.salesHour.push(sales);
    }
    console.log(this.salesHour);
  },
  render: function() {
    // populate the sales for the day for the store
    this.avgCookies();
    // retrieving an existing element on the html page
    var storeData = document.getElementById('storeData');
  
    // this is the city header and populates it with the name of the city
    var storeName = document.createElement('h4');
    storeName.textContent = this.name;
    // attach the store name to the store data tag on the html
    storeData.appendChild(storeName);
  
    var ulElement = document.createElement('ul');
    // going through every hour of the day and populates the hour and the average cookie sold as a list item
    for(var i=0; i < hours.length; i++){
      var listElement = document.createElement('li');
      listElement.textContent = `${hours[i]} : ${this.salesHour[i]}`;
      ulElement.appendChild(listElement);
    }
    // creating the final bullet with the totals for the day
    listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.total}`;
    ulElement.appendChild(listElement);
    storeData.appendChild(ulElement);
  }
};

var stores = [seattle, tokyo, dubai, paris, lima];

for(var i =0; i < stores.length; i++){
  stores[i].render();
}