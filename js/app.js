'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeData = document.getElementById('storeData');
var stores = [];
var allStoresTotal = 0;

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
    // console.log(sales);
    this.total += sales;
    // updates the SalesHour array with the hourly total of sales
    this.salesHour.push(sales);
    allStoresTotal += sales;
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
  newBox.textContent = 'Location';
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
};

createHeader();


function createFooter(){
  //block before totals per hours
  var tR = document.createElement('tr');
  var totalsHour = document.createElement('td');
  totalsHour.textContent ='Totals Per Hour';
  tR.appendChild(totalsHour);

  for(var i = 0; i<hours.length; i++){
    var storesHourlyTotals=0;
    var td = document.createElement('td');

    for(var j = 0; j< stores.length; j++){
      //something in this line not working
      storesHourlyTotals += stores[j].salesHour[i];
      td.textContent = storesHourlyTotals;
      tR.appendChild(td);
    }
  }


  var tdElem = document.createElement('td');
  tdElem.textContent = allStoresTotal;
  tR.appendChild(tdElem);
  storeData.appendChild(tR);
};



var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

createFooter();


var addStoreButton = document.getElementById('addStore');
addStoreButton.addEventListener('submit', addNewStore);

//Create a new store
function addNewStore (event) {
  event.preventDefault();
  var name = event.target.inputElementName.value;
  var min = event.target.inputMinimumCustomers.value;
  var max = event.target.inputMaximumCustomers.value;
  var avg = event.target.inputAvgCookies.value;


  var newStore = new City (name, min, max, avg);
  console.log('allStores: ', stores);

  storeData.removeChild(storeData.lastChild);
  newStore.render();
  createFooter();

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}