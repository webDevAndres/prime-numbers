"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var isPrime = function (primeNumber) {
    var number = primeNumber;
    var prime = true;
    for (var i = 2; i < number; i++) {
       if(number % i === 0){
           prime = false;
           break;
       }
    }
    return (prime) ? number : 0;

};

var getPrimeNumbers = function () {
    var number = $("number").value;
    var primeList = "";
    var primeCount = 0;
    var primeArray = [];
    var returnedNumber;
    for (var i = 2; i < number; i++) {
        returnedNumber = isPrime(i);
        if (returnedNumber !== 0) {
            primeList = primeList + returnedNumber + " ";
            primeCount++;
        }
    }

    $("count").value = primeCount;
    $("primes").value = primeList;

};


var processEntries = function () {
    // determineIfPrime();
    getPrimeNumbers();
};

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("number").focus();
};