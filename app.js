'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeData = document.getElementById('storeData');

function City(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesHour = [];
  this.total = 0;
}

City.prototype.avgCookies = function(){
  for(var i=0; i < hours.length; i++){
    // creates the random number of customers per hour and multplies it by the average number
    var sales = Math.floor(Math.random(this.min, this.max) * this.avg);
    this.total += sales;
    // updates the SalesHour array with the hourly total of sales
    this.salesHour.push(sales);
  }
};

var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);





City.prototype.render = function() {
  //create new table row
  var newTR = document.createElement('tr');
  //puts data into the TD cells
  for (var i=0; i < City.avgCookies.length; i++){
    var newTD = document.createElement('td');
    newTD.textContent = this.salesHour[i];
    newTR.appendChild(newTD);
  }
  storeData.appendChild(newTR);
};

function createHeader(){
  var newTR = document.createElement('tr');
  var newBox = document.createElement('th');
  newBox.textContent = '======';
  newTR.appendChild(newBox);
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


// seattle.render();
createHeader();

// for(var i =0; i < hours.length; i++){
//   hours[i].render();
// }
