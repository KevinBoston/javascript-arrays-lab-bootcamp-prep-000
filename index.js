var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.pop();
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift();
  kittens.shift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  var newArr = kittens.concat(name);
  return newArr;
}
function removeFirstKitten(arr){
  return kittens.slice();
}