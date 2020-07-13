"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var isPrime = function(primeNumber) {
    var number = primeNumber;
    for (var i = 2; i < number; i++){
        if ( number % i === 0) {
            number = 0;
        } else {
            number = primeNumber;
        }
    }
    return number;
};

var determineIfPrime = function() {
    var number = $("number").value;
        number = isPrime(number);
    var textarea = $("primes");
    var message;
        if (number === 0) {
            message =" is prime.";
        } else {
            message =" is not prime";
        }

    textarea.value = message;
}

var processEntries = function() {
    determineIfPrime();
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("number").focus();
};