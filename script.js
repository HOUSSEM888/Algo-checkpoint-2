function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        // Select the current element to be inserted into the sorted sequence
        let current = arr[i];
        let j = i - 1;

        // Shift elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position in sorted order
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Array before sorting:", array);
insertionSort(array);
console.log("Array after sorting:", array);
