function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
        return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(5)); //120
console.log(recursiveFactorial(5)); //120
console.log(recursiveFactorial(5)); //120
console.log(recursiveFactorial(5)); //120 --> 5*4*3*2*1*1

//Big-O = O(n)