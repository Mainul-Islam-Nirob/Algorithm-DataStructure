function bubbleSort(arr) {
    let swaped;
    do {
        swaped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaped = true;
            }
        }
    } while (swaped)
}

const arr = [8, 20, -30, 3, 53, -2];
bubbleSort(arr);
console.log(arr);

//Big-O  = O(n^2);