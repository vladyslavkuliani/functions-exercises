// TODO: add your solutions here!

//1 task
function combineWords(word1, word2) {
  return word1 + word2;
}

//2 task
function repeatPhrase(phrase, n) {
    for(var i=0; i<n; i++){
      console.log(phrase);
    }
}

//3 task
function toTheNthPower(number, power) {
    var n = 1;
    for(var i=0; i<power; i++){
      n*=number;
    }
    return n;
}

//4 task
function areaOfACircle(radius) {
    return (Math.PI*toTheNthPower(radius, 2)).toFixed(2);
}

//5 task
function pythagoreanTheorem(a, b) {
    return toTheNthPower(a,2) + toTheNthPower(b,2);
}

//6 task
function isXEvenlyDivisibleByY(x, y) {
    return (x%y === 0)?true:false;
}

//7 task
function countVowels(word) {
  return word.match(/[aeiouy]/g).length;
}

//8 task
function findWdi(arr){
  return arr.indexOf("wdi")>-1;
}

//9 task
function printTriangle(length) {
  var star = "*";
  var str = "";
  for(var i=0; i<length; i++){
    str+=star;
    console.log(str);
  }
}

//10 task
//adding n spaces infron of the string
function addingNspaces(s, n){
  for(var i=0; i<n; i++){
    s = " " + s;
  }
  return s;
}

function printPyramid(length) {
  var star = "*";
  var str = "";
  var pyramid = [];//array of strings
  for(var i=0; i<length; i++){
    str+=star;
    pyramid.push(addingNspaces(str.split("").join(" ") + "\n", length-i-1));
  }
  console.log("\n" + pyramid.join(""));
}
