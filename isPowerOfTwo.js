function isPowerOfTwo(n){
   if (n < 1) {
    return false;
   }

   while (n > 1) {
    if (n % 2 !== 0) {
        return false;
    }
    
    n = n/2;
   }
   return true;
}


console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(3)); // -> false
console.log(isPowerOfTwo(5)); // -> false
console.log(isPowerOfTwo(8)); // -> true

//Big-O = O(logn)


//Optimized version with bitwise operator

function isPowerOfTwoBitwise(n) {
    if(n < 1){
        return false;
    }

    return (n & (n-1)) === 0;
}


console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(3));
console.log(isPowerOfTwoBitwise(4));
console.log(isPowerOfTwoBitwise(15));

//Big-O = O(1);