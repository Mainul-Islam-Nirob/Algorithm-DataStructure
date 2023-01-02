function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
       if (n % i == 0) {
            return false;
       }
    }
    return true;        
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(19));
console.log(isPrime(11));

//Big-O = O(n)


//Optimized version
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
       if (n % i == 0) {
            return false;
       }
    }
    return true;        
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(19));
console.log(isPrime(11));

//Big-O = O(sqrt(n))