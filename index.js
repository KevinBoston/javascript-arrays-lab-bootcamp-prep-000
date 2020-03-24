var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(arr, name){
  arr = arr.pop();
  arr.push(name);
  return arr;
}
function destructivelyPrependKitten(arr, name){
  arr.unshift();
  arr.shift(name);
  return arr;
}
function destructivelyRemoveLastKitten(arr){
  arr = arr.pop();
  return arr;
}
function destructivelyRemoveFirstKitten(arr){
  arr.shift();
  return arr;
}
function appendKitten(arr, name){
  var newArr = arr.concat(name);
  return newArr;
}
function removeFirstKitten(arr){
  return arr.slice();
}