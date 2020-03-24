var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
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
function prependKitten(name){
  var newArr = kittens.unshift(name);
  return newArr;
}
function appendKitten(name){
  var newArr = kittens.concat(name);
  return newArr;
}
function removeFirstKitten(){
  var newArr = kittens.slice(0);
  return newArr;
}
function removeLastKitten(){
  kittens = splice(0, kittens.length - 1);
  return kittens;
}