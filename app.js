'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeData = document.getElementById('storeData');
var stores = [];

function City(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesHour = [];
  this.total = 0;
  stores.push(this);
}

City.prototype.avgCookies = function() {
  for(var i=0; i < hours.length; i++){
    // creates the random number of customers per hour and multplies it by the average number
    var sales = Math.floor(random(this.min, this.max) * this.avg);
    console.log(sales);
    this.total += sales;
    // updates the SalesHour array with the hourly total of sales
    this.salesHour.push(sales);
  }
};


function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

City.prototype.render = function() {
  this.avgCookies();
  //create new table row
  var newTR = document.createElement('tr');
  var hourly = document.createElement('td');
  hourly.textContent = this.name;
  newTR.appendChild(hourly);
  //puts data into the TD cells
  for (var i=0; i < hours.length; i++){
    var newTD = document.createElement('td');
    newTD.textContent = this.salesHour[i];
    newTR.appendChild(newTD);
  }
  var dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.total;
  newTR.appendChild(dailyTotal);
  storeData.appendChild(newTR);
};


function createHeader(){
  //empty block before hours
  var newTR = document.createElement('tr');
  var newBox = document.createElement('th');
  newBox.textContent = '======';
  newTR.appendChild(newBox);
  //hours header
  for (var i=0; i < hours.length; i++){
    var newTH = document.createElement('th');
    newTH.textContent = hours[i];
    newTR.appendChild(newTH);
  }
  var newTotals = document.createElement('th');
  newTotals.textContent = 'Daily Totals';
  newTR.appendChild(newTotals);
  storeData.appendChild(newTR);
}

// function createFooter(){
//   //block before totals per hours
//   var tR = document.createElement('tr');
//   var totalsHour = document.createElement('td');
//   totalsHour.textContent ='Totals Per Hour';
//   tR.appendChild(totalsHour);
//   for(var i = 0; i<hours.length; i++){
//     for(var j = 0; j<stores.length; i++);
//   }
//   storeData.appendChild(tR);
// }



var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);

createHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// createFooter();
