'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function city(name, min, max, avg, total){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesHour = [];
  this.total = 0;
};

city.prototype.avgCookies = function(){
  for(var i=0; i < hours.length; i++){
    // creates the random number of customers per hour and multplies it by the average number
    var sales = Math.floor(random(this.min, this.max) * this.avg);
    this.total += sales;
    // updates the SalesHour array with the hourly total of sales 
    this.salesHour.push(sales);
  }
  console.log(this.salesHour);
}

var seattle = new city('Seattle', 23, 65, 6.3);
var tokyo = new city('Tokyo', 3, 24, 1.2);
var dubai = new city('Dubai', 11, 38, 3.7);
var paris = new city('Paris', 20, 38, 2.3);
var lima = new city('Lima', 2, 16, 4.6);





//   render: function() {
//     // populate the sales for the day for the store
//     this.avgCookies();
//     // retrieving an existing element on the html page
//     var storeData = document.getElementById('storeData');
  
//     // this is the city header and populates it with the name of the city
//     var storeName = document.createElement('h4');
//     storeName.textContent = this.name;
//     // attach the store name to the store data tag on the html
//     storeData.appendChild(storeName);
  
//     var ulElement = document.createElement('ul');
//     // going through every hour of the day and populates the hour and the average cookie sold as a list item
//     for(var i=0; i < hours.length; i++){
//       var listElement = document.createElement('li');
//       listElement.textContent = `${hours[i]} : ${this.salesHour[i]}`;
//       ulElement.appendChild(listElement);
//     }
//     // creating the final bullet with the totals for the day
//     listElement = document.createElement('li');
//     listElement.textContent = `Total: ${this.total}`;
//     ulElement.appendChild(listElement);
//     storeData.appendChild(ulElement);
//   }



// for(var i =0; i < stores.length; i++){
//   stores[i].render();
// }