'use strict';


var allStores = [];

function addStore(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesHour = [];
  this.total = 0;
  allStores.push(this);
}

new addStore ('Kansas City', 4, 20, 2.1);


var addStoreButton = document.getElementById('');
addStoreButton.addEventListener('submit', addNewStore);

//Create a new store
function addNewStore (event) {
  event.preventDefault();
  var name = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  alert(`${name} ${min} ${max} ${avg}`);
  new addStore (+name, +min, +max, +avg);
  console.log('allStores: ', allStores);

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}